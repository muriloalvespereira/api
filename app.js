const express = require('express');
const app = express();
const mongoose = require('mongoose');

require("./users")
const Users = mongoose.model('users')

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log("Success")
}).catch((error) => {
  console.log("Error")
});

app.use(express.json());
app.get("/", (req, res) => {
  return res.json({titulo: "Como criar uma API"})
})

app.post("/users", (req, res) => {
 Users.create(req.body)
})

app.listen(8080, () => {
  console.log("Servidor Iniciado")
})