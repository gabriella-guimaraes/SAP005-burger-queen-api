// aqui vai o código que acessa o banco de dados
let usersCollection = require('./Users.json');

const getAllUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send(usersCollection)
}

const getUserById = (req, res) => {
  let id = usersCollection.users.filter(function(user){
    console.log(user.uid, req.params.uid)
    return user.uid === Number(req.params.uid);
  });
  res.send(id);
}

const updateUser = (req, res) => {
  //get the user id
  //update info
  res.send("user updated")
}

const deleteUser = (req, res) => {
  res.send("user deleted")
}

const addNewUser = (req, res) => {
  res.send("new user crated")
}

module.exports = { getAllUsers, getUserById, updateUser, deleteUser, addNewUser }