const mongoose = require("mongoose");

// Schema for todo
const schema = mongoose.Schema({
  
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: String,
    required: true
  },
  unidades: {
    type: String,
    required: true
  }
});

const inventario = (module.exports = mongoose.model("inventario", schema));
