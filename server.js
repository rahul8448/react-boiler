//Constants
var express = require('express');
var PORT = 8080;

//App
var app = express();

app.use(express.static('public'));

app.listen(PORT,function(){
  console.log('Running on http://localhost:' + PORT);
});
