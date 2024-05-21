const express = require('express');
const auth = require('../middleware/auth');
const { registerUser, loginUser, getUser, updatePassword } = require('../controllers/userController');

const router = express.Router();

router.post('/addUser', registerUser);
router.post('/connexion', loginUser);
router.get('/user/me', auth, getUser);
router.put('/user/me', auth, updatePassword);

module.exports = router;
