const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/student-register', { useNewUrlParser: true, useUnifiedTopology: true });

const studentsRoutes = require('./routes/studentsRoutes');
const worksRoutes = require('./routes/worksRoutes');

app.use('/students', studentsRoutes);
app.use('/works', worksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
