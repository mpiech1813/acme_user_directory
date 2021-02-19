const faker = require('faker');
const render = require('./render.js');

const usersList = document.querySelector('#user-list');

const users = new Array(20).fill('').map((_) => {
  return faker.helpers.userCard();
});

render({ users, usersList });

module.exports = users;
