const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const history = require('connect-history-api-fallback');
const app = express();

app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/users', (req, res) => {
  db.getAll((err, users) => {
    if (err) {
      console.log('Server side error in query to get all users', err);
      res.status(500).send(err);
    } else {
      res.json(users);
    }
  });
});

app.get('/users/last', (req, res) => {
  db.getLast((err, user) => {
    if (err) {
      console.log('Server side error in query to get last user', err);
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
});


app.post('/users', (req, res) => {
  // console.log('server: ', req.body);
  const name = req.body;
  db.add(name, (err, user) => {
    if (err) {
      console.log('Server side error in query to add to users collection', err);
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
