var express = require('express');
var app = express(); // here I use the express() method, instead of the createServer()



app.get('/', function(req, res){
  res.send('Fala matheus e dani, servidor rodando ');
});


const PORT = process.env.PORT ||  5000;
app.listen(PORT);