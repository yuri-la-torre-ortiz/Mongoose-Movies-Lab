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
  res.render('celebrities/new');
});

router.post('/celebrities/', (req, res) => {
  console.log(req.body);
  // const name = req.body.name;
  // const occupation = req.body.occupation;
  // const catchPhrase = req.body.catchPhrase;
  const { name, occupation, catchPhrase} = req.body;
  Celebrity.create({
    name, occupation, catchPhrase
  }).then(celebrity => {
    console.log(`Success! ${celebrity.name} was added to the database.`);
    celebrity.save();
    res.redirect(`/celebrities/${celebrity._id}`);
  }).catch(err => {
    next(new Error("Couldn't find celebrity: " + err));
    res.redirect('celebrities/new');
  })
})

router.post('/celebrities/:id/delete', (req, res) => {
  console.log(req.body);
  // const name = req.body.name;
  // const occupation = req.body.occupation;
  // const catchPhrase = req.body.catchPhrase;
    const id = req.params.id
    Celebrity.findByIdAndDelete(id).then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      next(new Error("Couldn't find celebrity: " + err));    // next(err)
    })
  })

module.exports = router;

