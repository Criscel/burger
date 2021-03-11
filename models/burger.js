const orm = require('../config/orm');

//create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
    all(cb) {
      orm.all('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    create(cols, vals, cb) {
      orm.create('burgers', cols, vals, (res) => cb(res));
    },
  
    update(objColVals, condition, cb) {
      orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
  };
  

module.exports = burger;