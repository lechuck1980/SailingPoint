const db = require("../model");
const Race = db.races;
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
  const race = {
    name: req.body.name,
    type: req.body.type,
    regattaId: req.body.regattaId,
    fleetId: req.body.fleetId,
    classId: req.body.classId
  };

  

  // Save student in the database
  Race.create(race)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Race."
      });
    });
};

// Retrieve all students
const findAll = (req, res) => {

  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Race.findAll({ where: condition })
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

  Race.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Race with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Race with id=" + id
      });
    });
};

// Update a student details by the id in the request
const update = (req, res) => {
  const id = req.params.id;

  Race.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully Updated Race."
        });
      } else {
        res.send({
          message: `Can't update Race with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Race with id=" + id
      });
    });
};

// remove a student with the given id 
const remove = (req, res) => {
  const id = req.params.id;

  Race.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully deleted Race!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Race with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Race with id=" + id
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