const express  = require('express');
const router   = express.Router();
const passport = require('passport');
const jwt      = require('jsonwebtoken');
const config   = require('../config/database');
const User     = require('../models/user');
const Company  = require('../models/company');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');

// router.get('/', passport.authenticate('jwt', {session:false}), (req, res, next)=> {
//     res.json({company: req.company});
// });

router.get('/', function(req, res, next) {
    Company.find(function (err, companies) {
      if (err) return next(err);
      res.json(companies);
    });
}); 

router.get('/:id', function(req, res, next) {
    Company.findById(req.params.id)
    .then(company => {
        if(!company){
            console.log("Not Found");
            return res.json({success:false, msg:'Company Not Found.'});
        }
        console.log(company);
        return res.status(200).json(company);
    })
    .catch(err => next(err));
});


router.post('/addCompany', passport.authenticate('jwt', {session:false}),(req, res, next)=>{
    
    let newCompany = new Company({
        perusahaan       : req.body.perusahaan,
        alamat           : req.body.alamat,
        deskripsi        : req.body.deskripsi,
        email_perusahaan : req.body.email_perusahaan,
        website          : req.body.website,
        telepon          : req.body.telepon,
        kategori         : req.body.kategori,
        author           : req.body.author,
        update_by        : "",
    });

    console.log(newCompany, "New Company has been added.");
    Company.addCompany(newCompany, (err, company) => {
        if(err){
            res.json({success:false, msg:'Failed to Add New Company', err});
        }else{
            res.json({success:true, msg:'Company Registered'});
        }
    });
 
});

router.put('/updateCompany',passport.authenticate('jwt', {session:false}),(req, res, next)=>{
    let updateCompany = {
        perusahaan       : req.body.perusahaan,
        alamat           : req.body.alamat,
        deskripsi        : req.body.deskripsi,
        email_perusahaan : req.body.email_perusahaan,
        website          : req.body.website,
        telepon          : req.body.telepon,
        kategori         : req.body.kategori,
        update_by        : req.body.update_by,
    };
    var id_company = req.body._id;
    var query = {'_id' : id_company};
    var company = updateCompany;
    Company.findByIdAndUpdate(query, company,{upsert:true},function(err, company) {
        if(err){
            console.log(err);
            return res.status(500).send({message: "Error, check the console. (Update Company)"});
        }
        console.log(company, "Selected Company has been updated.");
        return res.status(200).send({message: "Update was successful. (Update Company)"});            
    });
});

router.delete('/deleteCompany/:id',passport.authenticate('jwt', {session:false}),(req, res, next)=>{
    id_company = req.params.id;
    var query = {'_id' : id_company};
    Company.findById(id_company,function(err, company) {
        if(err){
            console.log(err);
            return res.status(500).send({message: "Error, check the console. (Update Company)"});
        }
        const Students = company.students;
        User.find({'_id':{"$in" : Students}})
        .then( users =>{
            return Promise.all( users.map( user => {
                user.company = '';
                if(user.level == 1){
                    user.level = 0;
                }
                console.log(users)
                user.save();
            }));
         })
         .catch( err => {
             console.log(err);
         });
         Company.findByIdAndRemove(query,function(err, company) {
             if(err){
                 console.log(err);
                 return res.status(500).send({message: "Error, check the console. (Update Company)"});
             }
             console.log("Delete was successful.");
             return res.status(200).send({message: "Delete was successful."});            
         });
    });
          
});


module.exports = router;