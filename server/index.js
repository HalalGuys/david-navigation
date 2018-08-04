const express = require('express');
const db = require('../database/index');
const proxy = require('http-proxy-middleware');
const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use('/list/:id', express.static(`/${__dirname}/../public`));

app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});

// Reviews
app.use('/reviews/:id', proxy({target: 'http://ec2-18-216-90-61.us-east-2.compute.amazonaws.com:80/'}));

// Details
app.use('/api/details/:listingId', proxy({target: 'http://ec2-54-200-238-109.us-west-2.compute.amazonaws.com:80/'}));

// Book
app.use('/api/listings/:listingId', proxy({target: 'http://ec2-13-59-22-40.us-east-2.compute.amazonaws.com:80/'}));

// Photos
app.use('/api/listing/:listingId', proxy({target: 'http://ec2-18-212-74-66.compute-1.amazonaws.com:80/'}));


app.get('/navigation', (req, res) => {
  // get id
  // let id = req.params.listingId;
  db.Nav.find({}, null).then(((data) => {
    res.send(data);
  }));
});


const port = process.env.PORT || 2998;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));