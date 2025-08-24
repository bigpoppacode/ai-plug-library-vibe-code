const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
    getCourseIndexPage,
    getCoursePage
} = require('../controllers/courseController');

router.get('/', protect, getCourseIndexPage);
router.get('/:slug', protect, getCoursePage);

module.exports = router;
