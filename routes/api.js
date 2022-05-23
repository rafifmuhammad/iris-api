const express = require('express');
const router = express.Router();
const Iris = require('./../models/iris');

// get a list of iris from the database
router.get('/iris', (req, res, next) => {
    Iris.find({}).then((iris) => {
        res.send(iris);
    });
});

// add a new iris to the database
router.post('/iris', (req, res, next) => {
    Iris.create(req.body).then((iris) => {
        res.send(iris);
    }).catch(next);
});

// update an iris in the database
router.put('/iris/:id', (req, res, next) => {
    Iris.findByIdAndUpdate({_id: req.params.id}).then(() => {
        Iris.findOne({_id: req.params.id}).then((iris) => {
            res.send(iris);
        });
    });
});

// delete an iris in the database
router.delete('/iris/:id', (req, res, next) => {
    Iris.findByIdAndRemove(req.params.id).then((iris) => {
      res.send(iris);  
    });
});

module.exports = router;