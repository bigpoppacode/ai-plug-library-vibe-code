const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
    getPromptsPage,
    getPromptDetailsPage,
    downloadPrompt
} = require('../controllers/promptController');

// All prompt routes are protected
router.use(protect);

router.get('/', getPromptsPage);
router.get('/:category/:promptId', getPromptDetailsPage);
router.get('/download/:category/:promptId', downloadPrompt);

module.exports = router;
