var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    session = require('express-session'),
    port = process.env.PORT || 8001,
    logger = require('morgan'),
    expressValidator = require('express-validator'),
    sequelize = require('./config').config;

var app = express(),

//Define Mongo Instance
pool = {};


//Models
var ward = require('./models/wards_model')(sequelize),
    admin = require('./models/admins_model')(sequelize),
    attendance = require('./models/attendances_model')(sequelize),
    exam = require('./models/exams_model')(sequelize),
    guardian = require('./models/guardians_model')(sequelize),
    level = require('./models/levels_model')(sequelize),
    school = require('./models/schools_model')(sequelize),
    payment = require('./models/payments_model')(sequelize),
    region = require('./models/regions_model')(sequelize),
    teacher = require('./models/teachers_model')(sequelize),
    season = require('./models/seasons_model')(sequelize),
    report = require('./models/reports_model')(sequelize),
    subject = require('./models/subjects_model')(sequelize);


//Set Relationships
ward.belongsTo(guardian);
ward.belongsTo(school);

admin.belongsTo(school);

attendance.belongsTo(school);
attendance.belongsTo(ward);
attendance.belongsTo(level);
attendance.belongsTo(teacher);

exam.belongsTo(school);
exam.belongsTo(ward);
exam.belongsTo(level);
exam.belongsTo(teacher);

level.belongsTo(school);

school.belongsTo(region);

payment.belongsTo(school);
payment.belongsTo(ward);
payment.belongsTo(level);
payment.belongsTo(season);

teacher.belongsTo(school);

report.belongsTo(ward);
report.belongsTo(level);
report.belongsTo(season);


//Init all Models
sequelize.sync().then(function(){
    console.log('Models created successfully !!!');
}).catch(function(error){
    console.log(error);
});


//Instantiating all routes
var usersRoute = require('./routes/users_router')(pool),
    authRoute = require('./routes/auth_router')(pool);

//Set middlewares
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(expressValidator([]));
app.use(session({resave:true, saveUninitialized: true, 
                secret: 'thequickbrownfoxjumpedoverthelazydogs',
                cookieName: 'session',
                duration: 30*60*1000, 
                activeDuration: 5*60*1000, 
                httpOnly: true, 
                cookie: {secure: false }}));

//CORS enabling
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

//logging
app.use(logger('dev'));

//Disable cache
app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

app.use('/cradleapps/school/api/auth', authRoute.router);
app.use('/cradleapps/school/api/user', usersRoute.router);

app.get('/cradleapps', function(req, res){
    res.status(200).send('Please check API documentation');
});

app.get('/', function(req, res){
    res.status(200).send('Please check API documentation');
});

app.get('/cradleapps/school', function(req, res){
    res.status(200).send('Please check API documentation');
});

app.get('/cradleapps/school/api', function(req, res){
    res.status(200).send('Please check API documentation');
});

app.listen(port, function(){
    console.log('Running on PORT '+port);

    //Init all events
    initAllEvents();
});

process.on("unhandledRejection", function(reason, p){
    console.log("Unhandled", p); // log all your errors, "unsuppressing" them.
//    throw(reason);
}); 

var initAllEvents = function(){
    
}

module.exports = app;