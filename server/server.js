console.log('Initiating eQuas Server');
//require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./config/mongoose');

var app = express();
var figlet = require('figlet');
 
figlet('eQuas', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.listen(port, () => {
  console.log(` eQuas Server listening at port ${port}`);
});

module.exports = {app};