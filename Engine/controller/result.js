const db = require("../model");
const Result = db.results;
const Op = db.Sequelize.Op;

//Insert new student
const create = (req, res) => {
    if (!req.body.position ||
      !req.body.scoring ||
      !req.body.raceId ||
      !req.body.crewId) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
  }
    
  // Create a student
  const result = {
    position: req.body.position,
    scoring: req.body.scoring,
    raceId: req.body.raceId,
    crewId: req.body.crewId
  };

  // Save student in the database
  Result.create(result)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Result."
      });
    });
};

// Retrieve all students
const findAll = (req, res) => {

  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Result.findAll({ where: condition })
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

  Result.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Result with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Result with id=" + id
      });
    });
};

// Update a student details by the id in the request
const update = (req, res) => {
  const id = req.params.id;

  Result.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully Updated Result."
        });
      } else {
        res.send({
          message: `Can't update Result with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Result with id=" + id
      });
    });
};

// remove a student with the given id 
const remove = (req, res) => {
  const id = req.params.id;

  Result.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully deleted Result!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Result with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Result with id=" + id
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