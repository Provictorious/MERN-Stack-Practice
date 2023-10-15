const express = require('express');
const router = express.Router();
const worksController = require('../controllers/worksController');
const authVerifyMiddleware = require('../middlewares/authVerify');

// Create a new work (requires authentication)
router.post('/', authVerifyMiddleware, worksController.createWork);

// Get a list of all works (requires authentication)
router.get('/', authVerifyMiddleware, worksController.getAllWorks);

// Get a specific work by ID (requires authentication)
router.get('/:id', authVerifyMiddleware, worksController.getWorkById);

// Update a specific work by ID (requires authentication)
router.put('/:id', authVerifyMiddleware, worksController.updateWork);

// Delete a specific work by ID (requires authentication)
router.delete('/:id', authVerifyMiddleware, worksController.deleteWork);

module.exports = router;
