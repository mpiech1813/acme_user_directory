const faker = require('faker');
const render = require('./render.js');

const usersList = document.querySelector('#user-list');
let curr = 0;

const _render = () => {
  render({ users, usersList, curr });
};
const users = new Array(20).fill('').map((_) => {
  return faker.helpers.userCard();
});

_render();

window.addEventListener('hashchange', () => {
  curr = window.location.hash.slice(1) * 1;
  _render();
});

module.exports = users;
