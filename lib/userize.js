
// This function will attempt to setup a users
// session in the datastore and create a session
// sid cookie.
//
// Method: Post
//
exports.login = function(request, response) {

  response.send('In the POST->Login');
  response.end();
}

// This function will destroy the users 
// persistent session and return an expired
// sid cookie.
// 
// Method: get
//
exports.logout = function(request, response) {

  response.send('In the GET->Logout');
  response.end(); 
}

// This function will attempt to register a new
// account for the user. Returning either a 
// session sid and account information or error
// messages.
// 
// Method: post
//
exports.register = function(request, response) {

  if (!request.body.username || !request.body.password) {
    response.send('');
    response.end();
    return;
  }

  if (request.body.username == 'ssmith') {
    response.send('All good set the cookie');
    response.end();
  } else {
    response.send('No love try again.');
    response.end();
  }

}

// This function will return the profile for a 
// a user, either a truncated public profile, or
// a full private profile.
// 
// Method: get
//
exports.profile = function(request, response) {

  response.send('In the GET->Profile');
  response.end();

}

// This function will return the profile for a 
// a user, either a truncated public profile, or
// a full private profile.
//
// Expects: Form JSON
// 
// Method: Put
//
exports.updateProfile = function(request, response) {
 
  response.send('In the PUT->updateProfile');
  response.end();

}