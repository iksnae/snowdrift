var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var modelSchema = new Schema({
  url:{type:String,required:true},
  key:{type:String,required:true}
});

var excludes = {_id:0,__v:0}

// static methods
modelSchema.statics.findWithUrl = function (url, callback) {
  this.findOne({url:url}, excludes, callback);
}

modelSchema.statics.findWithKey = function (key, callback) {
  this.findOne({key:key}, excludes, callback);
}

// exports
exports.ShortURL = mongoose.model("ShortURL",modelSchema, "shortened_urls");