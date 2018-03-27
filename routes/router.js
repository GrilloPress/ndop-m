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
router.get('/K', function(req, res, next) {
  res.render( 'K/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/K/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'K/' + theView );
});

router.get('/K/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'K/' + theDir + '/' + theView );
});

router.get('/K/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'K/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/K1', function(req, res, next) {
  res.render( 'K1/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/K1/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'K1/' + theView );
});

router.get('/K1/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'K1/' + theDir + '/' + theView );
});

router.get('/K1/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'K1/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //


// GET v1 index page.
router.get('/K2', function(req, res, next) {
  res.render( 'K2/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/K2/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'K2/' + theView );
});

router.get('/K2/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'K2/' + theDir + '/' + theView );
});

router.get('/K2/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'K2/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/v1', function(req, res, next) {
  res.render( 'v1/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/v1/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'v1/' + theView );
});

router.get('/v1/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'v1/' + theDir + '/' + theView );
});

router.get('/v1/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'v1/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/NEXT', function(req, res, next) {
  res.render( 'NEXT/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/NEXT/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'NEXT/' + theView );
});

router.get('/NEXT/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'NEXT/' + theDir + '/' + theView );
});

router.get('/NEXT/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'NEXT/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/AAA', function(req, res, next) {
  res.render( 'AAA/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/AAA/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'AAA/' + theView );
});

router.get('/AAA/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'AAA/' + theDir + '/' + theView );
});

router.get('/AAA/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'AAA/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

module.exports = router;
