const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fecNav');

const Schema = mongoose.Schema;

const navSchema = new Schema ({
  homeImage: String,
  houseStyle: String,
  name: String,
  cost: Number,
  listImage: String,
  houseId: Number,
});

const Nav = mongoose.model('Nav', navSchema);

module.exports = {
  Nav,
};