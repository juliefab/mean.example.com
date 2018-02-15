var express = require('express');
var router = express.Router();
var passport = require('passport');
var bodyParser = require('body-parser');
var Post = require('../models/post');
/* GET home page. */


router.get('/', function(req, res){

  Post.find({},function(err, posts){
    if(err){
    return res.render('posts/index',{'success':false, 'error': err});
    }
    return res.render('posts/index',{'success':true, 'posts': posts});
  });

});

router.get('/view/:slug', function(req,res){
  var slug = req.params.slug;

  Post.findOne({'slug':slug}, function(err, post){

    if(err){
      return res.render('posts/view',{'success':false, 'error': err});
    }

    return res.render('posts/view',{'success':true, 'post': post});

  });

});


module.exports = router;
