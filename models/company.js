const mongoose = require('mongoose');
const config   = require('../config/database');
const CompanySchema = mongoose.Schema({
    perusahaan:{
        type    : String,
        require : true
    },
    deskripsi:{
        type    : String,
        require : true
    },
    alamat:{
        type    : String,
        require : true
    },
    email_perusahaan:{
        type    : String,
        require : true
    },
    telepon:{
        type    : String,
        require : true
    },
    website:{
        type    : String,
        require : true
    },
    kategori:{
        type    : String,
        require : false
    },
    author:{
        type    : String,
        require : false
    },
    update_by:{
        type    : String,
        require : false
    },
    students:[{
        type: String,
        ref: 'user',
        unique  : false
    }]
});
const Company = module.exports = mongoose.model('Company', CompanySchema);

module.exports.addCompany = function(newCompany, callback, err){
    if(err) throw err;
    newCompany.save(callback);
}

module.exports.getCompanies = function(){
    Company.find();
}
module.exports.getCompanyById = function(id, callback){
    Company.findById(id, callback);
}