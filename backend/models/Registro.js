const mongoose = require("mongoose");

const RegistroSchema = new mongoose.Schema({
    nome: String,
    email: String,
    password: String
})

const RegistroModel = mongoose.model("registros", RegistroSchema)
module.exports = RegistroModel