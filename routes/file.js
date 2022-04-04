var express = require('express');
var db = require('../modules/db');
var upload = require('../modules/upload');
var router = express.Router();

/* POST /image */
router.post('/hwpfile', upload.single('hwpfile'), function(req, res) {
    res.send(JSON.stringify(req.file));
});

/* POST /file */
router.post('/file', upload.single('file'), function(req, res) {
    res.send(JSON.stringify(req.file));
    console.log(JSON.stringify(req.file))
});

module.exports = router;

