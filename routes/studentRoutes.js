const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.student_index_all);
router.get('/:id', studentController.student_index_one);
router.delete('/:id', studentController.student_delete);

module.exports = router;
