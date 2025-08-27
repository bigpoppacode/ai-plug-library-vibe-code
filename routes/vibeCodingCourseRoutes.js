const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
    getCourseIndexPage,
    getCoursePage
} = require('../controllers/courseController');

router.get('/', protect, getCourseIndexPage('vibe-coding-course', 'The Vibe Coding Course'));
router.get('/:slug', protect, getCoursePage('vibe-coding-course'));

module.exports = router;
