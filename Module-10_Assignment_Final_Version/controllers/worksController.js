const WorksModel = require('../models/WorksModel');

// Create a new work
exports.createWork = (req, res) => {
  const workData = req.body;
  const work = new WorksModel(workData);

  work.save()
    .then(() => {
      res.status(201).json(work);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
};

// Get a list of all works
exports.getAllWorks = (req, res) => {
  WorksModel.find()
    .then(works => {
      res.status(200).json(works);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Get a specific work by ID
exports.getWorkById = (req, res) => {
  const workId = req.params.id;

  WorksModel.findById(workId)
    .then(work => {
      if (!work) {
        return res.status(404).json({ message: 'Work not found' });
      }
      res.status(200).json(work);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Update a specific work by ID
exports.updateWork = (req, res) => {
  const workId = req.params.id;
  const updatedData = req.body;

  WorksModel.findByIdAndUpdate(workId, updatedData, { new: true })
    .then(work => {
      if (!work) {
        return res.status(404).json({ message: 'Work not found' });
      }
      res.status(200).json(work);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Delete a specific work by ID
exports.deleteWork = (req, res) => {
  const workId = req.params.id;

  WorksModel.findByIdAndRemove(workId)
    .then(work => {
      if (!work) {
        return res.status(404).json({ message: 'Work not found' });
      }
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

