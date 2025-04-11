const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  paciente: String,
  cedula: String,
telefono: String,
patologia: String,
OD: String,
OI: String,
Adicion: String,
DP: String,
Resultados: String ,
Montura: String ,
Cristales: String,
fecha: String,

    checked: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

todoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

module.exports = Todo;
