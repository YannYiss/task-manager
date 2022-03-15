const express = require('express');
const router = express.Router();
const {registerUser, loginUser, perfilUser} = require('../controllers/userController')

router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/perfil', perfilUser);

module.exports = router;