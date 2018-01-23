var express = require('express');
var app = express();

var serverName = "Sprinklr";

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the" + serverName + " server");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the" + serverName + " server");
   res.send('Hello POST');
})

// This responds a POST request for the homepage
app.put('/', function (req, res) {
   console.log("Got a PUT request for the" + serverName + " server");
   res.send('Hello PUT');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/sprinklr/v1/case', function (req, res) {
   console.log("Got a GET request for Sprinklr Case API");
   res.send('GET Case API');
})

// This responds a GET request for the /list_user page.
app.put('/sprinklr/v1/case/*', function (req, res) {
   console.log("Got a PUT request for Sprinklr Case API " + req.originalUrl);
   res.send('Update Case API ' + req.originalUrl);
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8010, "localhost", function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
