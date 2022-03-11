//Este archivo se crea para manipular el mensaje que se muestra cuando tenemos errores y al igual que otros modulos, se tiene que exportar al final del archivo e importar en el entrypoint 
const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};

module.exports = {
    errorHandler
}