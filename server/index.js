const express = require('express');
const models = require('./model.js');
// const path = require('path');
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
  let aggregateObject = {
    overall: 0,
    accuracy: 0,
    location: 0,
    communication: 0,
    checkIn: 0,
    cleanliness: 0,
    value: 0,
  };
  
  models.reviews.getReviews((reviews) => {
    // this sums the values for each categories
    for (let review of reviews) {
      for (let key in aggregateObject) {
        aggregateObject[key] = aggregateObject[key] + review[0].rating[key];
      }
    }
    // this section calculates average score for each category
    for (let key in aggregateObject) {
      aggregateObject[key] = aggregateObject[key] / reviews.length;
    }
    // the aggregateObject is added to the reviews array
    reviews.push(aggregateObject);
    res.send(reviews);
  }, req.params.listingId);
});


const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));