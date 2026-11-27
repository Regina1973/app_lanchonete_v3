const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/user.json");


function getUsers() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

function findByEmail(email) {
  const users = getUsers();
  return users.find(user => user.email === email);
}

function createUser(user) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
  return user;
}

module.exports = {
  getUsers,
  findByEmail,
  createUser
};