const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {

    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error('Datos incompletos');
    };

    const userExist = await User.findOne({email}) // en esta linea, vamos a buscar si algun documento ya contiene el correo a registrar

    if(userExist) {
        res.status(400);
        throw new Error('Ese usuario ya existe');
    };

    //En las lineas siguientes, se genera la encriptacion del password
    const salt = await bcrypt.genSalt(10); //
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if(user) {
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Los datos son invalidos');
    };
});

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Credenciales incorrectas');
    };
});

const perfilUser = asyncHandler(async (req, res) => {
    res.json({
        message: 'Pagina del usuario'
    });
});

module.exports = {
    registerUser,
    loginUser,
    perfilUser
}

