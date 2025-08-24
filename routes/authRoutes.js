const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getLoginPage,
  verifyEmail // New import
} = require('../controllers/authController');

// Routes to render auth pages
router.get('/login', getLoginPage);

// Routes to handle auth logic
// Note: registerUser logic will be handled by a different route now
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/verify-email', verifyEmail); // New route


module.exports = router;
