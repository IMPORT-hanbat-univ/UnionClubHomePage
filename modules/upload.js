const multer = require('multer'); 
const multerS3 = require('multer-s3'); 
const aws = require('aws-sdk');
const path = require('path');
aws.config.loadFromPath('/Users/jinmin/Desktop/MyData/Import/SecruityFile/awsconfig.json'); 

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'import-bucket-s3',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: function(req, file, cb) {
            let extension = path.extname(file.originalname)
            cb(null, 'unionclub/files/'+Date.now().toString()+extension);
        }
    })
});

module.exports = upload;