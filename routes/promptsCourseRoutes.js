const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
    getCourseIndexPage,
    getCoursePage
} = require('../controllers/courseController');

router.get('/', protect, getCourseIndexPage('prompts-course', 'The Prompt Course'));
router.get('/:slug', protect, getCoursePage('prompts-course'));

module.exports = router;
