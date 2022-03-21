var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* GET /question */
router.get('/', function(req, res) {
    db.get().collection('meeting').find().toArray(function(err, resu) {
        console.log(resu);
        res.render('secondlist', {data : resu});
    });
  });

module.exports = router;