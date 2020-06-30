const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  // get all the celebrities from the database
  Celebrity.find().then(celebritiesFromDatabase => {
    // render a 'celebrities' view with the celebrities data
    console.log(celebritiesFromDatabase);
    res.render('celebrities/index', { celebrities: celebritiesFromDatabase });
  }).catch(err => {
    next();
    console.log(err);
  })
});

router.get('/celebrities/:celebrityId', (req, res, next) => {
  // get celebrity by ID from the database
  const celebrityId = req.params.celebrityId
  Celebrity.findById(celebrityId).then(celebrityFromDatabase => {
/*     if (err) {
      next(new Error("Couldn't find celebrity: " + err));
      return;
    }
    // render a 'celebrities' view with the */ //celebrities data
    console.log(celebrityFromDatabase);
    res.render('celebrities/show', { celebrity: celebrityFromDatabase });
  }).catch(err => {
    next();
    console.log(err);
  })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('/celebrities/new');
});

module.exports = router;