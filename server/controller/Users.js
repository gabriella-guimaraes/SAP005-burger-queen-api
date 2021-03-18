// aqui vai o código que acessa o banco de dados

const getAllUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send([
    {
      "id": 0,
      "name": "Jesse Faden",
      "email": "jesse@gmail.com",
      "role": "director",
      "restaurant": "gg-burguer"
    }
  ])
}

module.exports = { getAllUsers }