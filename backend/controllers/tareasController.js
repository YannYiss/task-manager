//Este archivo va a contener todas las operaciones logicas que cada enpoint va a realizar

const asyncHandler = require('express-async-handler'); //Esta libreria nos permitira manejar de mejor manera las promesas y se tiene que envolver la funcion asincrona en ella 

const Tarea = require('../models/tareaModel'); //En esta linea vamos a importar el modelo de datos que utilizara este endpoint

const getTareas = asyncHandler(async(req, res) => {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
});

const createTarea = asyncHandler(async(req, res) => {
    /*if(!req.body.text) {
        res.status(400)
        throw new Error('Por favor ingresa una tarea')
    };*/
    console.log(req.body.text);
    const tarea = await Tarea.create({
        text: req.body.text
    });

    res.status(200).json(tarea);
});

const updateTarea = asyncHandler(async(req, res) => {

    const tarea = await Tarea.findById(req.params.id);

    if(!tarea) {
        res.status(400);
        throw new Error('Por favor ingresa el ID a modificar');
    };

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(tareaUpdated);
});

const deleteTarea = asyncHandler(async(req, res) => {
    const tarea = await Tarea.findById(req.params.id);

    if(!tarea) {
        res.status(400);
        throw new Error('Tarea no encontrada');
    };

    await tarea.remove()

    res.status(200).json({ id: req.params.id })
});

//Al final del archivo, se tiene que exportar todas las funciones para que puedan ser utilizadas en la ruta 
module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
};