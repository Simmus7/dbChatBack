const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mensajeSchema = new Schema({
  mensaje: { type: String, required: true },
  codigo: { type: Number, required: true },
}, {
  timestamps: true,
});

const Mensaje = mongoose.model('mensaje', mensajeSchema);

module.exports = Mensaje;