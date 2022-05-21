const db = require("../model");
const Sailor = db.sailors;
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
  const sailor = {
    name: req.body.name,
    surname: req.body.surname,
    sex: req.body.sex,
    borndate: req.body.borndate,
    address: req.body.address,
    countryId: req.body.countryId,
    state: req.body.state,
    city: req.body.city
  };

  
  // Save student in the database
  Sailor.create(sailor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Sailor."
      });
    });
};

// Retrieve all students
const findAll = (req, res) => {

  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Sailor.findAll({ where: condition })
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

  Sailor.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Sailor with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Sailor with id=" + id
      });
    });
};

// Update a student details by the id in the request
const update = (req, res) => {
  const id = req.params.id;

  Sailor.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully Updated Sailor."
        });
      } else {
        res.send({
          message: `Can't update Sailor with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Sailor with id=" + id
      });
    });
};

// remove a student with the given id 
const remove = (req, res) => {
  const id = req.params.id;

  Sailor.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully deleted Sailor!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Sailor with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Sailor with id=" + id
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