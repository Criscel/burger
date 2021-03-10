const orm = require('../config/orm');

//create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        })
    }
}

module.exports = burger;