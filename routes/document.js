var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* GET /apply */

router.get('/', function(req, res) {
  db.get().collection('document').find().toArray(function(err, resu) {
      console.log(resu);
      res.render('secondlist', {data : resu});
  });
});

module.exports = router;
