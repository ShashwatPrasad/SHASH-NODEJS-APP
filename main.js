var express = require('express');
var app = express();
var fs = require("fs");
app.get('/listapp', function (req, res) {
   fs.readFile( '/home/runner/work/SHASH-ANZX-APP/SHASH-ANZX-APP/app.json', 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
