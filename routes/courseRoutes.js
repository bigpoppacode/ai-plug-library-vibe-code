const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
    getCourseIndexPage,
    getCoursePage
} = require('../controllers/courseController');

router.get('/', protect, getCourseIndexPage('course', 'The N8N Automation Course'));
router.get('/:slug', protect, getCoursePage('course'));

module.exports = router;
