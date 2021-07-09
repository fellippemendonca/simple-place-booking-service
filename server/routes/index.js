const auth = require('../middleware/auth');
const controllers = require('../controllers');


// API V1 endpoints context
function apiV1 (ctx) {
  const { places, hotels, bookings } = controllers.v1;
  return async (app) => {
    app.get('/places', places.findPlaces(ctx));

    app.post('/hotels', hotels.createHotels(ctx));
    app.get('/hotels', hotels.findHotels(ctx));
    app.get('/hotels/:id', hotels.findHotels(ctx));
    app.get('/hotels/:id/bookings', hotels.listHotelBookings(ctx));

    app.post('/bookings', bookings.createBookings(ctx));
    app.get('/bookings', bookings.findBookings(ctx));
    app.get('/bookings/:id', bookings.findBookings(ctx));
  };
};

// OPEN API V1 endpoints context
function oapiV1 (ctx) {
  return async (app) => {
    const { hotels } = controllers.v1;
    app.get('/hotels/:id/bookings', hotels.listHotelBookings(ctx));
  };
};

// Internal-API context
function api(ctx) {
  return async (app) => {
    app.addHook('onRequest', auth);
    app.register(apiV1(ctx), { prefix: '/v1' });
  };
};

// Open-API context
function oapi(ctx) {
  return async (app) => {
    app.register(oapiV1(ctx), { prefix: '/v1' });
  };
};

// Routes Build Export
module.exports = (app, ctx) => {
  app.register(api(ctx), { prefix: '/api' });
  app.register(oapi(ctx), { prefix: '/oapi' });
};
