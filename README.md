## Userize

This is a very BETA project to abstract the storage and authentication requirements for basic user features on an API. This is not a full service authentication module. This is designed for rapid prototyping and is inspired upon the features available in the backlift.com user authentication project.

# Login
This enables a public login route `/api/login` to setup a session.

# Register 
This enables a `/api/register` to setup a user account. The route can be configured to require an email authentication process or simply return a valid session. 

# Profile 
The allows a public and private user profile. Long term the configuration for the module will allow the user to configure the values returned by both.

# Update Profile
This allows a logged in user to submit changes to their profile. 

## Storage
The module will support several storage options. 
* CouchDB (beta)
* MongoDB (coming)
* Redis (coming)

## Configuration
The following are pending configuration options. 

* Change the express routes as needed.
* Define the data fields to return for public and private profile requests.
* Define storage options in the server setup.

## Installation
This module is not ready for `npm`. Once it completed and submitted, it will installable using. `npm install userize`
