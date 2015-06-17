var mongoose = require('mongoose');

// export db initializer
exports.initWithMongoConnectionURL = function(mongo_url, callback){
  mongoose.connection.on("open", function(){
    callback();
  });
  mongoose.connect(mongo_url);
  global.mongoose = mongoose;
}