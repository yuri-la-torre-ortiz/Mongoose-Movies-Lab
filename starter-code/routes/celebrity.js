const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  // get all the celebrities from the database
  Celebrity.find().then(celebritiesFromDatabase => {
    // render a 'books' view with the books data
    console.log(celebritiesFromDatabase);
    res.render('celebrities/index', { celebrities: celebritiesFromDatabase });
  }).catch(err => {
    next();
    console.log(err);
  })
});

module.exports = router;