var Lookup = require('../models/Lookup');
var express = require('express');
var router = express.Router();

router.post('/',(req, res) => {
    var lookup = new Lookup({
        name : req.body.name,
        value: req.body.value,
        description:req.body.description
    });
  
    lookup.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});


router.get('/', (req, res) => {
    Lookup.find().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});


router.get('/:name', (req, res) => {
    var lookName = req.params.name;
    Lookup.find({ name:lookName }).then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});

module.exports = router;