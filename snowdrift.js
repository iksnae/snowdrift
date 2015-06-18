
var ShortURL = require('./model').ShortURL;

var config = exports.config = function(mongodb_url, callback){
  require("./db").initWithMongoConnectionURL(mongodb_url, callback);
}

var unshorten = exports.unshorten = function(key, callback){
  ShortURL.findWithKey(key, function(err, results){
    if(results){
      //console.log("url found");
      callback(null,results);
    }else{
      //console.log("url NOT found");
      callback(new Error("key not found"));
    }
  });
}

var shorten = exports.shorten = function(original_url, callback){
  ShortURL.findWithUrl(original_url, function(err, results){
    if(results){
      //console.log("url already stored");
      callback(null,results);
    }else{
      //console.log("url NOT already stored");
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
  var key = getUID(5);
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

function getUID(len){
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 
        out = '';
    for(var i=0, clen=chars.length; i<len; i++){
       out += chars.substr(0|Math.random() * clen, 1);
    }
    return out;
}