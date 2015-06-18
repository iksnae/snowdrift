var shortid = require('shortid');
var ShortURL = require('./model').ShortURL;

var config = exports.config = function(mongodb_url, callback){
  require("./db").initWithMongoConnectionURL(mongodb_url, callback);
}

var unshorten = exports.unshorten = function(key, callback){
  ShortURL.findWithKey(key, function(err, results){
    if(results){
      callback(null,results);
    }else{
      callback(new Error("key not found"));
    }
  });
}

var shorten = exports.shorten = function(original_url, callback){
  ShortURL.findWithUrl(original_url, function(err, results){
    if(results){
      callback(null,results);
    }else{
      var newShortUrl = new ShortURL();
      newShortUrl.url = original_url;
      generateNewUID(function(key){
        newShortUrl.key = key;
        newShortUrl.save(function(err, results){
          callback(null,results);
        });
      })
    }
  });
}

function generateNewUID(callback) {
  var key = shortid.generat();
  ShortURL.findWithKey(key, function(err, results){
    if(results){
      // key alreay in use.. try again
      generateNewUID(callback);
    }else{
      // key not in use, return in callback
      callback(key);
    }
  });
}
