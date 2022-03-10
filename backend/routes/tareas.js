const express = require('express');
const router = express.Router();
const {getTareas, updateTarea, deleteTarea, createTarea} = require('../controllers/tareasController');

/*router.get('/', getTareas);

router.post('/', createTarea);*/

router.route('/').get(getTareas).post(createTarea)

/*router.put('/:id', updateTarea);

router.delete('/:id', deleteTarea);*/

router.route('/:id').delete(deleteTarea).put(updateTarea);

module.exports = router