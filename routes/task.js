
const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/create-task', taskController.createForm);
router.post('/create', taskController.create);
router.get('/edit/:taskId', taskController.editForm);
router.post('/update/:taskId', taskController.update);
router.get('/delete/:taskId', taskController.delete);

module.exports = router; 