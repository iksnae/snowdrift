var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var modelSchema = new Schema({
  url:{type:String,required:true},
  key:{type:String,required:true}
});

// static methods
modelSchema.statics.findWithUrl = function (url, callback) {
  this.findOne({url:url}, callback);
}

modelSchema.statics.findWithKey = function (key, callback) {
  this.findOne({key:key}, callback);
}

// exports
exports.ShortURL = mongoose.model("ShortURL",modelSchema, "shortened_urls");