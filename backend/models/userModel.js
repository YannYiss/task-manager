const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: 'string',
            required: [true, 'Por favor ingresa tu nombre'] //El campo require realiza una validacion si es true, regresando como respuesta el segundo parametro
        },
        email: {
            type: 'string',
            required: [true, 'Por favor ingresa tu correo'],
            unique: true //El campo unique validara si este input es unico en toda la base de datos
        },
        password: {
            type: 'string',
            required:[true, 'Por favor ingresa tu contraseña']
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);