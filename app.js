const express   = require('express');
const path      = require('path');
const bodyParser= require('body-parser');
const passport  = require('passport');
const mongoose  = require('mongoose');
const config    = require('./config/database');
const port      = process.env.PORT || 8080;
const cors      = require('cors');
const app       = express();
const users     = require('./routes/users');
const companies = require('./routes/companies');
const reports   = require('./routes/reports');

app.use(cors());
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
    console.log('Connected to ' +config.database);
});

mongoose.connection.on('error', (err)=>{
    console.log('Unable to Connect ' +config.database);
});
app.use(express.static(path.join(__dirname,'/public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use('/reports', reports);
app.use('/companies', companies);
app.use('/users', users);
app.get('/', (req, res) => {
    res.send('Invalid Endpoints.');
});
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(port, () => {
    console.log('Server Running on Port : '+port)
}); 