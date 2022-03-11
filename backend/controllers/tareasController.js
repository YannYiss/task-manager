//Este archivo va a contener todas las operaciones logicas que cada enpoint va a realizar

const asyncHandler = require('express-async-handler');

const getTareas = asyncHandler(async(req, res) => {
    res.json({
        message: 'Obtener Tareas',
        author: 'Adrian',
        date: false
    });
});

const createTarea = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Por favor ingresa una tarea')
    };
    res.status(200).json({
        message:'Nueva tarea creada',
        tarea: req.body.text
    })
});

const updateTarea = asyncHandler(async(req, res) => {
    res.json({
        message: `Se modifico la tarea ${req.params.id}`,
        author: 'Adrian',
        date: false
    });
});

const deleteTarea = asyncHandler(async(req, res) => {
    res.json({
        message: `Se elimino la tarea ${req.params.id}`,
        author: 'Adrian',
        date: false
    });
});

//Al final del archivo, se tiene que exportar todas las funciones para que puedan ser utilizadas en la ruta 
module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}