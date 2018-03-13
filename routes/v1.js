const express = require('express');
const router = express.Router();

const UserController = require('./../controllers/UserController');

const passport = require('passport');
require('./../middleware/passport')(passport);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ status: 'success', message: 'Short Stay Management API', data: { 'version_number': 'v1.0.0' } });
});

router.post('/users', UserController.create);                                                    // C
router.get('/user', passport.authenticate('jwt', { session: false }), UserController.get);       // R
router.put('/user', passport.authenticate('jwt', { session: false }), UserController.update);    // U
router.delete('/user', passport.authenticate('jwt', { session: false }), UserController.remove); // D
router.post('/user/login', UserController.login);

module.exports = router;
