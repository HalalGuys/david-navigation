const express = require('express');
const models = require('./model.js');
const db = require('../database/index');
const app = express();

app.use('/', express.static(`${__dirname}/../public`));
app.use('/listing/:listingId', express.static(`/${__dirname}/../public`));

app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});


app.get('/navigation/:listingId', (req, res) => {
  // get id
  let id = req.params.listingId;
  db.Nav.find({houseId: id}, null).then(((data) => {
    res.send(data);
  }));
});


const port = process.env.PORT || 2998;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));