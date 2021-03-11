const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

//Create the router for the app
router.get('/', (req, res) => {
    cat.all((data) => {
      const hbsObject = {
        cats: data,
      };
      console.log('hbsObject', hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post('/api/burgers', (req, res) => {
    cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burgers.update(
      {
        sleepy: req.body.sleepy,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  

//export the router at the end of your file
module.exports = router;