const getTareas = (req, res) => {
    res.json({
        message: 'Obtener Tareas',
        author: 'Adrian',
        date: false
    });
};

const createTarea = (req, res) => {
    res.json({
        message: 'Se creo una nueva tarea',
        author: 'Adrian',
        date: false
    });
};

const updateTarea = (req, res) => {
    res.json({
        message: `Se modifico la tarea ${req.params.id}`,
        author: 'Adrian',
        date: false
    });
};

const deleteTarea = (req, res) => {
    res.json({
        message: `Se elimino la tarea ${req.params.id}`,
        author: 'Adrian',
        date: false
    });
};

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}