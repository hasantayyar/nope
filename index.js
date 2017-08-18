var nopes = require('./en.json'); // only English for now
module.exports = function() {
  return nopes[ Math.floor(Math.random() * nopes.length) ];
};