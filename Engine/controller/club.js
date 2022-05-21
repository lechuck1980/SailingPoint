const db = require("../model");
const Club = db.clubs;
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
  const club = {
    name: req.body.name,
    shortname: req.body.shortname,
    address: req.body.address,
    countryId: req.body.countryId,
    state: req.body.countryId,
    city: req.body.city
  };



  // Save student in the database
  Club.create(club)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Club."
      });
    });
};

// Retrieve all students
const findAll = (req, res) => {

  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Club.findAll({ where: condition })
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

  Club.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Club with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Club with id=" + id
      });
    });
};

// Update a student details by the id in the request
const update = (req, res) => {
  const id = req.params.id;

  Club.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully Updated Club."
        });
      } else {
        res.send({
          message: `Can't update Club with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Club with id=" + id
      });
    });
};

// remove a student with the given id 
const remove = (req, res) => {
  const id = req.params.id;

  Club.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully deleted Club!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Club with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Club with id=" + id
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