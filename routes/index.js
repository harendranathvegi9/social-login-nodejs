var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',user: req.user });
});

router.get('/login/facebook',passport.authenticate('facebook'));

router.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/rror' }),
  function(req, res) {
    console.log("login facebook with success ", req.user);
    res.redirect('/');
  });

module.exports = router;
