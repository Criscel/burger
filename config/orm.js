const connection = require('./connection.js');

const orm = {
    selectAll: (table, cb) => {
      const query = 'SELECT * FROM ' + table + ';';
      connection.query(query, [table], (err, res) => {
        if (err) throw err;

        console.log(res);
        cb(res);
      });
    },
}

module.exports = orm;