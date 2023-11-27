const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegistroSchema = require('./models/Registro');

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Crud') // Api conectada a database cadastrousuario no mongoDB

app.post('/login', (req, res) => {
  const {email, password} = req.body
  RegistroSchema.findOne({email: email})
  .then(user => {
    if(user) {
      if(user.password === password && user.email === email){
        res.json("Sucesso")
      }else {
        res.json("Senha incorreta")
      }
    }else {
      res.json("Conta não encontrada")
    }
  })
})


app.post('/registro', (req, res) =>{
  const {nome, email, password} = req.body;
  RegistroSchema.create(req.body)
  .then(registros => res.json(registros))
  .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log('serve is running')
}) 

