//Este middleware nos va a ayudar a proteger nuestras rutas de usuarios no autentificados con token
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token = '';
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Con esta linea, vamos a obtener el token dle usuario
            const token = req.headers.authorization.split(' ')[1];
            //Esta liena va a verificar si la firma es correcta
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //Por ultimo, esta linea va a hacer accesible la informacion del user a todas las rutas de acceso
            req.user = await User.findById(decoded.id).select('-password');
            next()
        } catch(e) {
            console.log(e);
            res.status(401);
            throw new Error('Acceso no autorizado');
        }
    } else {
        res.status(401);
        throw new Error('Acceso denegado, no hay un token valido');
    };
});

module.exports = {
    protect
}