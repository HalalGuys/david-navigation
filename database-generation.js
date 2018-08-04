const faker = require('faker');
const db = require('./database/index.js');

const houseURL = 'https://s3.us-east-2.amazonaws.com/fec-navigation';

const generateRandomNumber = function (lowerLimit, upperLimit) {
  return lowerLimit + Math.floor(upperLimit * Math.random());
};

const dataList = [];

const generateNav = function () {
  for (let i = 0; i < 100; i++){
    let data = {};
    data.homeImage = `${houseURL}/${generateRandomNumber(1,11)}.jpg`;
    data.houseStyle = faker.lorem.words(3);
    data.name = faker.lorem.words(3);
    data.cost = generateRandomNumber(1, 1000);
    data.houseId = i;
    dataList.push(data);
  }
};

generateNav();

const processes = [];

const populateData = function () {
  processes.push(db.Nav.insertMany(dataList).catch(err => {
    console.log(err);
    process.exit(-1);
  }));
};

populateData();

Promise.all(processes).then(() => process.exit(0));
