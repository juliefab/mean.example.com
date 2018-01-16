var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Running with Pm2 ', name: 'Julie'});
});

// router.get('/view', function(req, res, next) {
//   res.render('view', { title: 'Express', name: 'Julie'});
// });

module.exports = router;
