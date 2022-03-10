const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use('/api/tareas', require('./routes/tareas'));

app.listen(port, () => console.log(`El servidor inicio en el puerto ${port}`));