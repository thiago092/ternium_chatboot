var express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose'); 

var app = express(); // here I use the express() method, instead of the createServer()

app.use(bodyParser.json());

const config =require('./config/keys');

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
require('./models/Coupons');


require('./routes/dialogFlowRoutes')(app);
require('./routes/fulfillmentRoutes')(app);





const PORT = process.env.PORT ||  5000;
app.listen(PORT);