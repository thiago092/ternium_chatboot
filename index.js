var express = require('express');
const bodyParser=require('body-parser');


var app = express(); // here I use the express() method, instead of the createServer()

app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);
require('./routes/fulfillmentRoutes')(app);




const PORT = process.env.PORT ||  5000;
app.listen(PORT);