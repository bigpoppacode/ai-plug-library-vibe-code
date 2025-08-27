const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
    getCourseIndexPage,
    getCoursePage
} = require('../controllers/courseController');

router.get('/', protect, getCourseIndexPage('ai-creator-course', 'The AI Creator Course'));
router.get('/:slug', protect, getCoursePage('ai-creator-course'));

module.exports = router;
