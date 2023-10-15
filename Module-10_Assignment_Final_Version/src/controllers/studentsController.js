const StudentsModel = require('../models/StudentsModel');

// Create a new student
exports.createStudent = (req, res) => {
  const studentData = req.body;
  const student = new StudentsModel(studentData);

  student.save()
    .then(() => {
      res.status(201).json(student);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
};

// Get a list of all students
exports.getAllStudents = (req, res) => {
  StudentsModel.find()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Get a specific student by ID
exports.getStudentById = (req, res) => {
  const studentId = req.params.id;

  StudentsModel.findById(studentId)
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json(student);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Update a specific student by ID
exports.updateStudent = (req, res) => {
  const studentId = req.params.id;
  const updatedData = req.body;

  StudentsModel.findByIdAndUpdate(studentId, updatedData, { new: true })
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json(student);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Delete a specific student by ID
exports.deleteStudent = (req, res) => {
  const studentId = req.params.id;

  StudentsModel.findByIdAndRemove(studentId)
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

