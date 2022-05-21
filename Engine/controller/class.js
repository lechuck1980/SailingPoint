const db = require("../model");
const Class = db.classes;
const Op = db.Sequelize.Op;

//Insert new student
const create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a student
  const classobj = {
    name: req.body.name,
  };

  // Save student in the database
  Class.create(classobj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Class."
      });
    });
};

// Retrieve all students
const findAll = (req, res) => {

  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Class.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
  
};

//search a single student with an id
const findOne = (req, res) => {
  const id = req.params.id;

  Class.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Class with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Class with id=" + id
      });
    });
};

// Update a student details by the id in the request
const update = (req, res) => {
  const id = req.params.id;

  Class.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully Updated Class."
        });
      } else {
        res.send({
          message: `Can't update Class with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Class with id=" + id
      });
    });
};

// remove a student with the given id 
const remove = (req, res) => {
  const id = req.params.id;

  Class.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully deleted Class!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Class with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Class with id=" + id
      });
    });
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove
}