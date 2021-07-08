const auth = require('../middleware/auth');
const v1 = require('./v1');


// Internal-API context
function api(ctx) {
  return async (app) => {
    app.addHook('onRequest', auth);
    app.register(v1(ctx), { prefix: '/v1' });
  };
};

// Open-API context
function oapi(ctx) {
  return async (app) => {
    app.register(v1(ctx), { prefix: '/v1' });
  };
};

// Routes Build Export
module.exports = (app, ctx) => {
  app.register(api(ctx), { prefix: '/api' });
  app.register(oapi(ctx), { prefix: '/oapi' });
};
