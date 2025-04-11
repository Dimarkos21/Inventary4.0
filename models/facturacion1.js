const mongoose = require('mongoose');

const FacturacionSchema = new mongoose.Schema({
    cliente: String,
    productos: {
        type: mongoose.Schema.Types.Mixed, // Esto permite que sea un String o un Array
        required: true
    },
    Pprecio: String,
    cedula: String,
    metodo: String,
    moneda: String,
    precio: String,
    conversion: String,
    tasa: String,
    factura: String,
  

    fecha: String,

    checked: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Relación con el usuario
    }
});

module.exports = mongoose.model('facturacion', FacturacionSchema);
