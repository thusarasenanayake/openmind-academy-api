const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.student_index_all);
router.get('/:id', studentController.student_index_one);
router.delete('/:id', studentController.student_delete);
router.post('/', studentController.student_create);
router.put('/:id', studentController.student_update);

module.exports = router;
