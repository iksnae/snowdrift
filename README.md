# snowdrift

![Alt text](http://1.bp.blogspot.com/_10RbzQXx0c4/TCpvQlNCMmI/AAAAAAAAB-E/yJTzBCmMYQM/s1600/snowdrift+shortening.jpg)

This is a very simple url shortener.

Stores URLs in MongoDB.

### Installation ###
```
npm install snowdrift -S
```
### Setup & Usage ###
``` javascript
var snowdrift = require("snowdrift");
snowdrift.config(#mongodb_connection_url#, function(){
    console.log("ready to start shortening");
});
```

### Shorten ###

store url and generate a unique key
``` javascript
snowdrift.shorten("http://apple.com", function(err, results){
    console.log(results);
});
```

### Unshorten ###

retrieve url for unique key
``` javascript
snowdrift.unshorten("ortrw", function(err, results){
    console.log(results);
});

```

###The Results

both methods return json containing ```key``` and ```url``` properties
```json
 { 
    "key": "ortrw",
    "url": "http://apple.com" 
}
```
