var snowdrift = require("./snowdrift");

snowdrift.config(require("./config").mongodb, function(){
    console.log("ready to start shortening");
});

snowdrift.shorten("https://github.com", function(err, results){
    console.log(results);
});

snowdrift.unshorten("ortrw", function(err, results){
    console.log(results);
});