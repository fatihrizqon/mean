const express  = require('express');
const router   = express.Router();
const passport = require('passport');
const jwt      = require('jsonwebtoken');
const config   = require('../config/database');
const User     = require('../models/user');
const Company  = require('../models/company');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');

router.get('/', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    User.find(function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
});

router.post('/register', (req, res, next) =>{
    nim = req.body.nim.toString();
    var prodi  = nim.substr(3,2);
    if(prodi=='20'){
      prodi = "Pendidikan Teknik Informatika (S1)";
    }else if(prodi=='21'){
      prodi = "Teknik Elektronika (D3)";
    }else if(prodi=='22'){
      prodi = "Pendidikan Teknik Elektronika (S1)";
    }else{
      prodi = "Unknown";
    }

    var angkatan  = nim.substr(0,2);
    if(angkatan=='09'){
      angkatan = "2009";
    }else if(angkatan=='10'){
      angkatan = "2010";
    }else if(angkatan=='11'){
      angkatan = "2011";
    }else if(angkatan=='12'){
      angkatan = "2012";
    }else if(angkatan=='13'){
      angkatan = "2013";
    }
    else if(angkatan=='14'){
      angkatan = "2014";
    }else if(angkatan=='15'){
      angkatan = "2015";
    }else if(angkatan=='16'){
      angkatan = "2016";
    }else if(angkatan=='17'){
      angkatan = "2017";
    }else if(angkatan=='18'){
      angkatan = "2018";
    }else if(angkatan=='19'){
      angkatan = "2019";
    }else if(angkatan=='20'){
      angkatan = "2020";
    }else if(angkatan=='21'){
      angkatan = "2021";
    }else{
      angkatan = "Unknown";
    }

    if(prodi == "Unknown"){
        console.log("NIM yang anda masukkan tidak valid.");
        return res.status(401).send({message: "NIM yang anda masukkan tidak valid."});
    }

    let newUser = new User({
        nama     : req.body.nama,
        email    : req.body.email,
        nim      : req.body.nim,
        password : req.body.password,
        prodi    : prodi,
        angkatan : angkatan,
        precision: req.body.precision,
        recall   : req.body.recall,
        status   : req.body.status,
        level    : req.body.level
    });
    
    User.addUser(newUser, (err, user) => {
        if(err){
            User.findOne({
                $or: [
                  { 'nim': req.body.nim },
                  { 'email': req.body.email }
                ]
              }, function(err, user) {
                if (user) {
                    console.log("NIM atau Email sudah terdaftar, harap hubungi Admin.");
                    return res.json({success:false, msg:'NIM atau Email sudah terdaftar, harap hubungi Admin.'});
                }
            });
        }else{
            console.log("Anda telah terdaftar.");
            res.json({success:true, msg:'PESAN : Anda telah terdaftar.'});
        }
    });
});

router.post('/authenticate', (req, res, next)=>{
    const nim      = req.body.nim;
    const password = req.body.password;
    User.getUserByNim(nim, (err, user)=>{ 
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:'NIM tidak ditemukan.'})
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 802400 
                });
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user:{
                        id       : user._id,
                        nama     : user.nama,
                        nim      : user.nim,
                        email    : user.email,
                        company  : user.company,
                        precision: user.precision,
                        recall   : user.recall,
                        level    : user.level
                    }
                });
            }else{
                return res.json({success:false, msg:'Password salah.'})
            }
        });
    });
});

// error
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next)=> {
    var user = req.user;
    var id_student = user.id;
    var id_company = user.company;
    var results = [];
    User.findById(id_student, function(err, user) {
        if(err) {
            console.log(err);
            return res.status(500).send({message: "Oops, Error. Harap coba lagi.(1)"});
        }
        if(!user) {
            return res.status(404).send({message: "PERHATIAN : NIM tidak ditemukan."});            
        }
        results.push(user);
        if(!id_company){
            return res.json({results}); 
        }else{
            Company.findById(id_company, function(err, company) {
                if(err) {
                    console.log(err);
                    return res.status(500).send({message: "Oops, Error. Harap coba lagi.(2)"});
                }
                if(!company) {
                    console.log("Perusahaan belum dimasukkan.");
                }
                results.push(company);
                return res.json({results}); 
            }); 
        }
    });
});

router.put('/reset', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    var user = req.user;
    var id_student = user.id;
    var id_company = user.company;
    var results = [];
    User.findById(id_student, function(err, user) {
        if(err) {
            console.log(err);
            return res.status(500).send({message: "Oops, Error. Harap coba lagi.(3)"});
        }
        if(!user) {
            return res.status(404).send({message: "PERHATIAN : NIM tidak ditemukan."});            
        }
        if(user){
            user.set('company', undefined, { strict: false });
            user.save(function(err, user){
                if(err) {
                    return res.status(500).send({message: "PERHATIAN : Reset Gagal, harap coba lagi."});
                } 
                else {
                    if(id_company){
                        Company.findById(id_company, function(err, company) {
                            const deleteStudent = {
                                $pull: {students: id_student}
                            };
                            var students = company.students;
                            Company.findOneAndUpdate({ _id: id_company }, 
                                deleteStudent, 
                                { new: true })
                                .then((company) => {
                                    console.log("Reset Berhasil.");
                                    return res.status(200).send({message: "Reset Berhasil."});
                                },
                                (err) => {
                                    console.log(err);
                                }
                            );
                        }); 
                    }else{
                        res.send("Company hasn't set yet.");
                    }
                }
            });
        }
        
    });
});

router.put('/upgrade', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    let user = {
        level : 1
    };
    query = {'_id' : req.user._id};
    User.findByIdAndUpdate(query, user,{upsert:true},function(err, user) {
        if(err){
            console.log(err);
            return res.status(500).send({message: "Error, check the console. (Upgrade Level)"});
        }
        console.log(user, "Selected Company has been updated.");
        return res.status(200).send({message: "Upgrade was successful. (Upgrade Level)"});            
    });

});
router.put('/update', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    const user = req.body;
    const student = req.user;
    var id_student = student.id;
    var id_company = user.company;
    var tmp_company = student.company;
    var result = [];
    if(tmp_company){
        Company.findById(tmp_company, function(err, company) {
            if(id_student!=undefined){
                const deleteStudent = {
                    $pull: {students: id_student} 
                };
                var students = company.students;
                Company.findOneAndUpdate({ _id: tmp_company }, 
                    deleteStudent, 
                    { new: true })
                    .then((company) => {
                        console.log("Data lama berhasil dihapus.", company);
                    },
                    (err) => {
                        console.log(err);
                    }
                );
            }
        }); 
    }
    
    User.findById(id_student, function(err, user) {
        if(err) {
            console.log(err);
            return res.status(500).send({message: "Oops, Error. Harap coba lagi.(4)"});
        }
        if(!user) {
            return res.status(404).send({message: "NIM tidak ditemukan."});            
        }
        user.company = req.body.company;
        result.push(user);
        user.save(function(err, user){
            if(err) {
                return res.status(500).send({message: "Gagal Update, harap coba lagi."});
                console.log(err);
            } else {
                return res.status(200).send({message: "Update Berhasil."});
                console.log('Data anda telah diperbarui.');
            }
        });

        Company.findById(id_company, function(err, company) {
            company.students.addToSet(id_student)
            company.save(function(err, company){
                if(err){
                    console.log(err);
                    return res.status(500).send({message: "Gagal Update, harap coba lagi."});
                }
                console.log('Data anda telah diperbarui.');
                result.push(company);
            });
        });
    });
});

router.put('/updateAccount', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    nim = req.body.nim.toString();

    var prodi  = nim.substr(3,2);
    if(prodi=='20'){
      prodi = "Pendidikan Teknik Informatika (S1)";
    }else if(prodi=='21'){
      prodi = "Teknik Elektronika (D3)";
    }else if(prodi=='22'){
      prodi = "Pendidikan Teknik Elektronika (S1)";
    }else{
      prodi = "Unknown";
    }

    var angkatan  = nim.substr(0,2);
    if(angkatan=='09'){
      angkatan = "2009";
    }else if(angkatan=='10'){
      angkatan = "2010";
    }else if(angkatan=='11'){
      angkatan = "2011";
    }else if(angkatan=='12'){
      angkatan = "2012";
    }else if(angkatan=='13'){
      angkatan = "2013";
    }
    else if(angkatan=='14'){
      angkatan = "2014";
    }else if(angkatan=='15'){
      angkatan = "2015";
    }else if(angkatan=='16'){
      angkatan = "2016";
    }else if(angkatan=='17'){
      angkatan = "2017";
    }else if(angkatan=='18'){
      angkatan = "2018";
    }else if(angkatan=='19'){
      angkatan = "2019";
    }else if(angkatan=='20'){
      angkatan = "2020";
    }else if(angkatan=='21'){
      angkatan = "2021";
    }else{
      angkatan = "Unknown";
    }

    if(prodi == "Unknown"){
        console.log("NIM yang anda masukkan tidak valid.");
        return res.status(401).send({message: "NIM yang anda masukkan tidak valid."});
    }

    let user = {
        nim      : req.body.nim,
        nama     : req.body.nama,
        email    : req.body.email,
        password : req.body.password,
        prodi    : prodi,
        angkatan : angkatan,
        precision: req.body.precision,
    };
    var query = {'_id' : req.user.id};
    User.findByIdAndUpdate(query, user, (err, user) => {
        if(err){
            User.findOne({
                $or: [
                  { 'nim': req.body.nim },
                  { 'email': req.body.email }
                ]
              }, function(err, user) {
                if (user) {
                    console.log("NIM atau Email sudah terdaftar, harap hubungi Admin.");
                    return res.json({success:false, msg:'NIM atau Email sudah terdaftar, harap hubungi Admin.'});
                }
            });
        }else{
            console.log("Data Berhasil Dirubah.");
            res.json({success:true, msg:'PESAN : Data Berhasil Dirubah.'});
        }
    });
});

router.get('/data-tracer', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    res.json({user: req.user});
});

module.exports = router;