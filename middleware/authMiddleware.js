const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.cookies.token) {
    try {
      // Get token from cookie
      token = req.cookies.token;

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token (don't include password)
      req.user = await User.findById(decoded.id).select('-password');
      
      // Make user info available in all views
      res.locals.user = req.user;

      next();
    } catch (error) {
      console.error(error);
      res.redirect('/auth/login');
    }
  }

  if (!token) {
    res.redirect('/auth/login');
  }
};

// Middleware to pass user info to views if they are logged in
const checkUser = async (req, res, next) => {
  let token;
  if (req.cookies.token) {
     token = req.cookies.token;
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     req.user = await User.findById(decoded.id).select('-password');
     res.locals.user = req.user;
  } else {
    res.locals.user = null;
  }
  next();
}


module.exports = { protect, checkUser };
