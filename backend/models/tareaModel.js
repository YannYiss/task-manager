//Los modelos se crean para dar un esquema a los dato que van a recibir.

//Aqui se hace la declaracion del modelo que va a utilizar la db
const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //Esta linea de codigo se utiliza para vincular el esquema de user model con esta db
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Por favor ingresa una descripción'],
    }
}, {
    timestamps: true // Esta propiedad se utiliza para que se genere un timestamp en automatico al crearse el registro 
});

module.exports = mongoose.model('Tarea', tareaSchema); //Aqui exportaremos nuestro esquema para que pueda ser utilizado, el primer parametro sera el nombre que le asignaremos y el segundo, el esquema que exportaremos 