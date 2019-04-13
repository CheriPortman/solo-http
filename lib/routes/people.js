const People = require('../models/People');

function post(req, res) {
  return People 
    .create({ name: req.body.name })
    .then(person => res.send(person));
}

function get(req, res) {
  if(req.id) {
    People
      .findById(req.id)
      .then(person => res.send(person));  
  } else {
    People
      .find()
      .then(people => res.send(people));
  }
}

function put(req, res) {
  People  
    .findByIdAndUpdate(req.id, { name: req.body.name })
    .then(person => res.send(person));
}

const methods = {
  post,
  get, 
  put
};

function people(req, res) {
  const lowerMethodCase = req.method.toLowerCase();
  const method = methods[lowerMethodCase];
  method(req, res);  
}

module.exports = people;
