//Este archivo va a contener todas las rutas y sus tipos de request, se crea una por cada endpoint
const express = require('express');
const router = express.Router();
const {getTareas, updateTarea, deleteTarea, createTarea} = require('../controllers/tareasController');
const {protect} = require('../middleware/authMiddleware');

/*router.get('/', getTareas);

router.post('/', createTarea);*/

router.route('/').get(protect, getTareas).post(protect, createTarea)

/*router.put('/:id', updateTarea);

router.delete('/:id', deleteTarea);*/

router.route('/:id').delete(protect, deleteTarea).put(protect, updateTarea);

module.exports = router