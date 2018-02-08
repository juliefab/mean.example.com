var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'J-Finch.com ', name: 'Julie'});
});

//crash the server for pm2 testing
router.get('/exit', function(req, res, next){
  process.exit(1);
});

// router.get('/view', function(req, res, next) {
//   res.render('view', { title: 'Express', name: 'Julie'});
// });

module.exports = router;
