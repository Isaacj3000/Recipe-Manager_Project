
const homeCtrl = require('../controllers/home');


const express = require('express');
const router = express.Router();
const isSignedIn = require('../middleware/is-signed-in.js');

router.get('/', isSignedIn, (req, res) => {
    res.render('home', { user: req.session.user });
});

module.exports = router;