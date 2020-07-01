const mongoose = require('mongoose');

const Movie = require('../models/movie');

const Celebrity = require('../models/celebrity');

const dbName = 'celebrity';

mongoose.connect(`mongodb://localhost/${dbName}`, { 
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
  }).then(console.log("OK. Connected to database.")).catch(err => console.log(err));

/* const celebrities = [
  {
    name: 'Derek Faye',
    occupation: 'retiree',
    catchPhrase: "How very dare you!"
  },
  {
    name: 'Lauren Cooper',
    occupation: 'highschooler',
    catchPhrase: "Am I bovvered???"
  },
  {
    name: 'Carol Beer',
    occupation: 'receptionist',
    catchPhrase: 'Computer says no.'
  }
]

Celebrity.insertMany(celebrities, (err) => {
  console.log(`Added ${celebrities.length} movies!`)
  mongoose.connection.close();
}); */
const movies = [
  {
    title: 'The Little Death',
    genre: 'horror',
    plot: "A group of fetishists discover something new about themselves"
  },
  {
    title: 'The Biggest Lie',
    genre: 'comedy',
    plot: "What would you do for the truth?"
  },
  {
    title: 'Iron Beers',
    genre: 'tragedy',
    plot: 'Just say no.'
  }
]

Movie.insertMany(movies, (err) => {
  console.log(`Added ${movies.length} movies!`)
  mongoose.connection.close();
});