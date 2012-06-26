## Userize

[![Build Status](https://secure.travis-ci.org/d1b1/userize.png?branch=master)](http://travis-ci.org/d1b1/userize)

This is a very BETA project to abstract the storage and authentication requirements for basic user features on an API. This is not a full service authentication module. This is designed for rapid prototyping and is inspired upon the features available in the backlift.com user authentication project.

Too many times I have needed a drop in restful API login feature. This project, which might be a duplicate of an existing project, is designed to be a micro module and boilerplate for basic features. 

## GET /api/login
This enables a public login route `/api/login` to setup a session.

<pre>
curl -XPOST /api/register { 
  username: 'JoeBlow', 
  password: 'XXXXX'
}
</pre>

## GET /api/logout
This enables logout of a given user/session.

<pre>
curl -XPOST /api/logout
</pre>

## POST /api/register 
This enables a `/api/register` to setup a user account. The route can be configured to require an email authentication process or simply return a valid session. 

<pre>
curl -XPOST /api/register { 
  username: 'JoeBlow', 
  password: 'XXXXX', 
  name: 'Joe Blow',
  city: 'Bosotn'
  ...
}
</pre>

## GET /api/profile/:user - Retrieve a Profile
The allows a public and private user profile. Long term the configuration for the module will allow the user to configure the values returned by both.

<pre>
curl -XGET /api/profile/JoeBlow
</pre>

## PUT /api/profile/:user - Update a Profile
This allows a logged in user to submit changes to their profile. 

<pre>
curl -XPUT /api/profile/JoeBlow { 
  username: 'JoeBlow', 
  password: 'XXXXX', 
  name: 'Joe Blow',
  city: 'Boston',
}
</pre>

## Storage Options
The module will support several storage options. Since this is designed to be boilerplate, we want this module to flexible in the storage location for user information.

* CouchDB - use the https://github.com/dominicbarnes/node-couchdb-api Node module. 
* MongoDB (coming)
* Redis (coming)
* Static (future)

## Configuration
The following are pending configuration options. 

* Change the express routes as needed.
* Define the data fields to return for public and private profile requests.
* Define storage options in the server setup.

## Installation
This module is not ready for `npm`. Once it completed and submitted, it will installable using. `npm install userize`
