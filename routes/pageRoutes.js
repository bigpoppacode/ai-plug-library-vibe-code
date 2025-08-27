const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
    getHomePage,
    getOverviewPage,
    getStudyGuidePage,
    getWorkflowsPage,
    getWorkflowDetailsPage,
    downloadWorkflow,
    getCoursesPage,
    getResourcesPage,
    getResourceDetailPage,
    getPlaybooksPage
} = require('../controllers/pageController');
const { registerUser } = require('../controllers/authController');

router.get('/', getHomePage);
router.post('/', registerUser);
router.get('/login', (req, res) => res.redirect('/auth/login'));
router.get('/overview', protect, getOverviewPage);
router.get('/study', protect, getStudyGuidePage);
router.get('/courses', protect, getCoursesPage);
router.get('/resources', protect, getResourcesPage);
router.get('/resources/:resourceName', protect, getResourceDetailPage);
router.get('/playbooks', protect, getPlaybooksPage);
router.get('/workflows', protect, getWorkflowsPage);
router.get('/workflows/:workflowId', protect, getWorkflowDetailsPage);
router.get('/download/:workflowId', protect, downloadWorkflow);

module.exports = router;
