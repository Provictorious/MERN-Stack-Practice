const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

// Create a new student
router.post('/', studentsController.createStudent);

// Get a list of all students
router.get('/', studentsController.getAllStudents);

// Get a specific student by ID
router.get('/:id', studentsController.getStudentById);

// Update a specific student by ID
router.put('/:id', studentsController.updateStudent);

// Delete a specific student by ID
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;

