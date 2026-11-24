const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const usersFile = path.join(
  __dirname,
  "../data/users.json"
);

function getUsers() {
  return JSON.parse(
    fs.readFileSync(usersFile, "utf8")
  );
}

function saveUsers(users) {
  fs.writeFileSync(
    usersFile,
    JSON.stringify(users, null, 2)
  );
}

async function createUser(data) {
  const users = getUsers();

  const exists = users.find(
    (user) => user.email === data.email
  );

  if (exists) {
    throw new Error(
      "E-mail já cadastrado"
    );
  }

  const hashedPassword =
    await bcrypt.hash(data.password, 10);

  const newUser = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    password: hashedPassword
  };

  users.push(newUser);

  saveUsers(users);

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email
  };
}

function listUsers() {
  const users = getUsers();

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email
  }));
}

module.exports = {
  createUser,
  listUsers
};