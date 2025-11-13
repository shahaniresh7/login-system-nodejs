const express = require('express');
const router = express.Router();
const { register, login, profile, updatePassword } = require('../controllers/authController');

router.get('/', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));
router.get('/profile', profile);
router.get('/update-password', (req, res) => res.render('update-password'));

router.post('/register', register);
router.post('/login', login);
router.post('/update-password', updatePassword);

module.exports = router;
