const express  = require('express');
const router   = express.Router();
const passport = require('passport');
const jwt      = require('jsonwebtoken');
const config   = require('../config/database');
const User     = require('../models/user');
const Company  = require('../models/company');
const Report   = require('../models/report');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');

// router.get('/', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    // Report.find(function (err, report) {
    //     if (err) return next(err);
    //     res.json(report);
    // });
//     console.log("Report")
// });

router.get('/', (req, res, next)=>{
    Report.find(function (err, report) {
        if (err) return next(err);
        res.json(report);
    });
});

// Reports/:id
router.get('/:id', function(req, res, next) {
    Report.findById(req.params.id)
    .then(report => {
        if(!report){
            console.log("Not Found");
            return res.json({success:false, msg:'Report Not Found.'});
        }
        console.log(report);
        return res.status(200).json(report);
    })
    .catch(err => next(err));
});

router.post('/addReport', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    var datetime = new Date();
    let newReport = new Report({
        title       : req.body.title,
        text        : req.body.text,
        company     : req.body.company,
        created_at  : datetime,
        author      : req.body.author,
        status      : '0'
    });
    Report.addReport(newReport, (err, report) => {
        if(err){
            res.json({success:false, msg:'Failed to Report the Company.', err});
        }else{
            res.json({success:true, msg:'Company Reported.'});
        }
    });
});

router.delete('/deleteReport/:id',passport.authenticate('jwt', {session:false}),(req, res, next)=>{
    id_report = req.params.id;
    var query = {'_id' : id_report};
    Report.findByIdAndRemove(query,function(err, report) {
        if(err){
            console.log(err);
            return res.status(500).send({message: "Error, check the console. (Update Company)"});
        }
        console.log("Delete was successful.");
        return res.status(200).send({message: "Delete was successful."});            
    });
});



module.exports = router;