var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' );
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render( 'index' );
});

// GET v1 index page.
router.get('/M', function(req, res, next) {
  res.render( 'M/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/M/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'M/' + theView );
});

router.get('/M/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'M/' + theDir + '/' + theView );
});

router.get('/M/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'M/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

module.exports = router;
