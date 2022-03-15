const registerUser = (req, res) => {
    res.json({
        message: 'Usuario Creado'
    });
};

const loginUser = (req, res) => {
    res.json({
        message: 'Usuario logeado'
    });
};

const perfilUser = (req, res) => {
    res.json({
        message: 'Pagina del usuario'
    });
}

module.exports = {
    registerUser,
    loginUser,
    perfilUser
}

