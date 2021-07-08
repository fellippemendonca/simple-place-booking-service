const Fastify = require('fastify');

const config = require('../config');
const MongoDB = require('../db/mongodb'); 
const routes = require('./routes');


// Class Server
function Server() {

  // init Fastify
  this.app = Fastify({ logger: true });
  this.ctx;
}

// Class Server Method Init
Server.prototype.init = function() {

  const mongoDB = new MongoDB(config.MONGO_DB_URL);
  this.ctx = {
    mongoDbConn: mongoDB.connect()
  };

  // assign routes to Fastify service
  routes(this.app, this.ctx);
  
  return this.app;
}

// Class Server Method Listen
Server.prototype.listen = async function(port = config.PORT, host = config.HOST) {

  // Start Fastify service listener
  try {
    await this.app.listen(port, host);
  } catch (error) {
    this.app.log.error(error);
    process.exit(1);
  }

  return this.app;
}

Server.prototype.shutdown = async function() {
  this.app.close();
  this.ctx.mongoDbConn.close();
}

module.exports = Server;
