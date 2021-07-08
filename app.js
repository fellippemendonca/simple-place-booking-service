const Server = require('./server');

// Instance of the Server
const server = new Server();

// Initialize API Routes and DB connection (If it had one)
server.init();

// Initialize API Listener
server.listen();

process.on('SIGTERM', function () {
  server.shutdown();
  process.exit(0);
});
