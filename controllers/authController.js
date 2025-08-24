const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { sendEmail, addContactToSendGrid } = require('../utils/sendEmail');
const crypto = require('crypto');

// Utility to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Render the login page
// @route   GET /auth/login
// @access  Public
const getLoginPage = (req, res) => {
  res.render('login', { title: 'Login' });
};

// @desc    Register a new user
// @route   POST /
// @access  Public
const registerUser = async (req, res) => {
  const { fullName, email, password, phoneNumber } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).render('register', { error: 'User already exists', title: 'Register & Access Workflows' });
    }

    const user = await User.create({
      fullName,
      email,
      password,
      phoneNumber
    });

    // Add user to SendGrid mailing list
    await addContactToSendGrid(user);

    const verificationToken = user.getVerificationToken();
    await user.save({ validateBeforeSave: false });

    const verifyUrl = `${process.env.BASE_URL}/auth/verify-email?token=${verificationToken}`;
    const message = `
      <h1>Welcome to the n8n Workflow Library!</h1>
      <p>Thank you for signing up. Please click the link below to verify your email address and activate your account:</p>
      <a href="${verifyUrl}" clicktracking=off>${verifyUrl}</a>
      <p>This link will expire in 10 minutes.</p>
    `;

    await sendEmail({
      email: user.email,
      subject: 'Email Verification - n8n Workflows',
      html: message
    });
    
    res.render('message', {
        title: "Thank You For Registering!",
        message: "Please check your email to activate your account."
    });

  } catch (error) {
    res.status(500).render('register', { error: error.message, title: 'Register & Access Workflows' });
  }
};

// @desc    Authenticate user & get token
// @route   POST /auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).render('login', { error: 'Invalid email or password', title: 'Login' });
    }

    const isMatch = await user.comparePassword(password);

    if (isMatch) {
      const token = generateToken(user._id);
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });
      res.redirect('/overview');
    } else {
      res.status(401).render('login', { error: 'Invalid email or password', title: 'Login' });
    }
  } catch (error) {
    res.status(500).render('login', { error: error.message, title: 'Login' });
  }
};

// @desc    Logout user
// @route   GET /auth/logout
// @access  Private
const logoutUser = (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.redirect('/auth/login');
};

// @desc    Verify user's email
// @route   GET /auth/verify-email
// @access  Public
const verifyEmail = async (req, res) => {
    const verificationToken = crypto.createHash('sha256').update(req.query.token).digest('hex');
    try {
        const user = await User.findOne({
            verificationToken,
            verificationTokenExpire: { $gt: Date.now() }
        });

        if (!user) {
            return res.render('message', { title: "Verification Failed", error: "Invalid or expired verification link." });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpire = undefined;
        await user.save();
        
        res.render('message', {
            title: "Email Verified!",
            message: "Your account has been successfully verified. You can now log in.",
            showLoginLink: true
        });
    } catch (error) {
        res.status(500).render('message', { title: "Error", error: "An error occurred during verification." });
    }
};


module.exports = {
  getLoginPage,
  registerUser,
  loginUser,
  logoutUser,
  verifyEmail // Don't forget to export
};
