console.log('Initiating eQuas Server');
//require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./config/mongoose');
var LookUpRoute = require('./routes/LookupRoute');
var app = express();
var figlet = require('figlet');

app.use(bodyParser.json());
figlet('eQuas', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

const port = process.env.PORT || 3000;

app.use('/lookup',LookUpRoute);

app.listen(port, () => {
  console.log(`eQuas Server listening at port ${port}`);
});

module.exports = {app};