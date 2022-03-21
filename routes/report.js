var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* GET /web */
router.get('/', function(req, res) {
    db.get().collection('report').find().toArray(function(err, resu) {
        console.log(resu);
        res.render('secondlist', {data : resu});
    });
  });

module.exports = router;

