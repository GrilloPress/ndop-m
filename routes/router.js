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

// GET v1 index page.
router.get('/M1', function(req, res, next) {
  res.render( 'M1/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.all('/M1/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'M1/' + theView, {
    data: req.body
  } );
});

router.all('/M1/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  console.log(req.body);
  // if you want session stuff console.log(req.session);
  res.render( 'M1/' + theDir + '/' + theView, {
    data: req.body,
  } );

});

router.all('/M1/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'M1/' + theDir + '/' + theDir2 + '/' + theView, {
    data: req.body
  } );
});


// // // // // // //

// GET v1 index page.
router.get('/NHSUK', function(req, res, next) {
  res.render( 'NHSUK/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/NHSUK/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'NHSUK/' + theView );
});

router.get('/NHSUK/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'NHSUK/' + theDir + '/' + theView );
});

router.get('/NHSUK/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'NHSUK/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

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
router.get('/M3', function(req, res, next) {
  res.render( 'M3/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.all('/M3/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'M3/' + theView, {
    data: req.body
  } );
});

router.all('/M3/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  console.log(req.body);
  // if you want session stuff console.log(req.session);
  res.render( 'M3/' + theDir + '/' + theView, {
    data: req.body,
  } );

});

router.all('/M3/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'M3/' + theDir + '/' + theDir2 + '/' + theView, {
    data: req.body
  } );
});

module.exports = router;
