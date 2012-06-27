var express    = require('express'),
    requestObj = require('request'),
    http       = require('http'),
    crypto     = require('crypto');

var userize = require('./lib/userize');

// ---------------------------------------------------

var app = express.createServer( express.logger() );

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
});

// The following are standard user authentication and
// profile management express paths.

app.get('/api/profile/:user',      userize.profile );
app.put('/api/profile/:user',      userize.updateProfile );
app.post('/api/register',          userize.register );
app.post('/api/login',             userize.login );
app.get('/api/logout',            userize.logout );

var port = process.env.PORT || 4100;
app.listen(port, function() { 
  console.log("StartUp: Userize " + port ); 
});
