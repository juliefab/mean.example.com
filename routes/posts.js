var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('posts/index', {title:'CMS'});
});


module.exports = router;
