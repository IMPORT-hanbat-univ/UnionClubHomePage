require('dotenv').config();

const mongoClient = require('mongodb').MongoClient;
let mongodb;

console.log(process.env.DB_URL);

function connect(callback){
  mongoClient.connect(process.env.DB_URL, (err, db) => {
    if(err) console.log(err);
    mongodb = db.db('UnionHomePage');
    callback();
  });
}

function get(){
  return mongodb;
}

function close(){
  mongodb.close();
}

module.exports = {
  connect,
  get,
  close
};