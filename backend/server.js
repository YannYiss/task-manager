//Este sera nuestro entrypoint y desde aqui se solicitaran las rutas 
const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT;

const app = express();

//En el entrypoint se van a definir todos los middleware que sean necesarios, despues de declaral la app y antes del uso
app.use(express.json()); //este middleware se utiliza para poder leer los json
app.use(express.urlencoded({extended:false})); //este otro se utiliza para saber como interpretar los datos recibidos

app.use('/api/tareas', require('./routes/tareas'));

app.use(errorHandler);

app.listen(port, () => console.log(`El servidor inicio en el puerto ${port}`));