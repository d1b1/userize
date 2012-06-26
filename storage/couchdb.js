var CouchDb = require('couchdb-api');

// This function will return a DB Connection.
exports.db = function() {

  var srv = CouchDb.srv( process.env.COUCH_DB_HOST, process.env.COUCH_DB_PORT );

  return srv.db( process.env.COUCH_DB_NAME );
  
};

// This will return the base CouchDB Server.
exports.server = function() {

  return srv = CouchDb.srv( process.env.COUCH_DB_HOST, process.env.COUCH_DB_PORT);

};

// This will return the Connection Info
exports.info = function() {

  return { host : process.env.COUCH_DB_HOST, 
           port : process.env.COUCH_DB_PORT,
           db   : process.env.COUCH_DB_NAME
         };

};

// This is a helper function that makes it possible to 
// call a single command and pass in the ddoc and view name.

exports.view = function ( ddoc, viewName ) {

  var db   = this.db();
  var ddoc = db.ddoc( ddoc );
  var view = ddoc.view( viewName );

  return view;
}