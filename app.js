const { response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

require("./users")
const Users = mongoose.model('users')

mongoose.connect('mongodb://localhost:27017/my_database', {
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
  return res.json({titulo: "Method GET working"})
})

app.post("/users", (req, res) => {
 Users.create(req.body)
 if(res.ok){
   console.log("Created successfully")
 }
})

app.listen(3333, () => {
  console.log("Server up")
})