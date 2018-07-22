const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const config   = require('../config/database');
const UserSchema = mongoose.Schema({
    nama:{
        type    : String
    },
    email:{
        type    : String,
        require : true,
        unique : true
    },
    nim:{
        type    : String,
        require : true,
        unique  : true
    },
    prodi:{
        type : String
    },
    angkatan:{
        type : String
    },
    password:{
        type    : String,
        require : true
    },
    company:{
        type : String,
        ref  : 'company',
        unique  : false
    },
    precision:{
        type : Number
    },
    recall:{
        type : Number
    },
    level:{
        type : Number
    },
    status:{
        type    : String,
        require : false
    }
});
const User = module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => { 
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}


module.exports.getUserByNim = function(nim, callback){
    const query = {nim: nim}
    User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUsers = function(req, res, callback){
    User.find();
}

module.exports.addCompany = function(req, res, user, callback, err){
    console.log('Add User\'s Company');
}

module.exports.getUserCompany = function(nim, callback){
    res.send('Get User\'s Company');
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
} 