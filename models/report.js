const mongoose = require('mongoose');
const config   = require('../config/database');
const ReportSchema = mongoose.Schema({
    title:{
        type    : String,
        require : true
    },
    text:{
        type    : String,
        require : true
    },
    created_at:{
        type    : String,
        require : true
    },
    company:{
        type    : String,
        require : true
    },
    author:{
        type    : String,
        require : true
    },
    status:{
        type    : Number,
        require : true
    }
});
const Report = module.exports = mongoose.model('Report', ReportSchema);

module.exports.addReport = function(newReport, callback, err){
    if(err) throw err;
    newReport.save(callback);
}

module.exports.getReport = function(){
    Report.find();
}
module.exports.getReportById = function(id, callback){
    Report.findById(id, callback);
}