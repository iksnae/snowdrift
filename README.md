# snowdrift

![Alt text](http://1.bp.blogspot.com/_10RbzQXx0c4/TCpvQlNCMmI/AAAAAAAAB-E/yJTzBCmMYQM/s1600/snowdrift+shortening.jpg)

This is a very simple url shortener

### Installation ###
```
npm install snowdrift -S
```
### Setup & Usage ###
``` javascript
var snowdrift = require("snowdrift");
snowdrift.config(<mongodb_connection>, function(){
    console.log("ready to shorten");
});
```
### Shorten ###
``` javascript
snowdrift.shorten("http://apple.com",function(err, results){
    console(results);
    /*
    // { "key": "ortrw","url": "http://apple.com" }
    /
});
```
### Unshorten ###
``` javascript
snowdrift.shorten("ortrw",function(err, results){
    console(results);
});

```
###The Results
both methods return json containing ```key``` and ```url``` properties
```json
 { "key": "ortrw","url": "http://apple.com" }
```
