var express = require("express");
var path = require("path");
var app = express();
// var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "client")));

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "bower_components")));
app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
app.listen(8000, function() {
  console.log("listening on port 8000");
});
