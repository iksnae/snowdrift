var snowdrift = require("../snowdrift");

snowdrift.config(require("./config").mongodb, function(){
    console.log("ready to start shortening");
});

// generate a key
snowdrift.shorten("https://github.com", function(err, results){
    console.log("key:", results.key);
    // fetch url
    snowdrift.unshorten(results.key, function(err, results){
      console.log("url:", results.url);
      process.exit(0);
  });
});

