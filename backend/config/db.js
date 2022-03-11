//Este archivo sera nuestra configuracion base para podernos conectar a la base de datos
const mongoose= require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Conexion exitosa a MondoDB: ${conn.connection.host}`);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

module.exports = connectDB;