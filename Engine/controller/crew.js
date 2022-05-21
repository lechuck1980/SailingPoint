const db = require("../model");
const Crew = db.crews;
const Op = db.Sequelize.Op;

//Insert new student
const create = (req, res) => {
    if (!req.body.clubId ||
      !req.body.boatId ||
      !req.body.skipperId) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
}
    
  // Create a student
  const crew = {
    clubId: req.body.clubId,
    boatId: req.body.boatId,
    skipperId: req.body.skipperId,
    mainsailtrimmerId: req.body.mainsailtrimmerId,
    headsailtrimmer1Id: req.body.headsailtrimmer1Id,
    headsailtrimmer2Id: req.body.headsailtrimmer2Id,
    bowmanId: req.body.bowmanId
  };

  

  // Save student in the database
  Crew.create(crew)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Crew."
      });
    });
};

// Retrieve all students
const findAll = (req, res) => {

  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Crew.findAll({ where: condition })
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

  Crew.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Crew with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Crew with id=" + id
      });
    });
};

// Update a student details by the id in the request
const update = (req, res) => {
  const id = req.params.id;

  Crew.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully Updated Crew."
        });
      } else {
        res.send({
          message: `Can't update Crew with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Crew with id=" + id
      });
    });
};

// remove a student with the given id 
const remove = (req, res) => {
  const id = req.params.id;

  Crew.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Successfully deleted Crew!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Crew with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Crew with id=" + id
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