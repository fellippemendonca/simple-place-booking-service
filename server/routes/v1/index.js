const v1 = require('../../controllers/v1');


const { places, hotels, guests, bookings } = v1;

// V1 endpoints context
module.exports = (ctx) => {
  return async (app) => {
    app.get('/places', places.findPlaces(ctx));

    app.post('/hotels', hotels.createHotels(ctx));
    app.get('/hotels', hotels.findHotels(ctx));
    app.get('/hotels/:id', hotels.findHotels(ctx));
    app.get('/hotels/:id/bookings', hotels.listHotelBookings(ctx));

    app.post('/guests', guests.createGuests(ctx));
    app.get('/guests', guests.findGuests(ctx));
    app.get('/guests/:id', guests.findGuests(ctx));

    app.post('/bookings', bookings.createBookings(ctx));
    app.get('/bookings', bookings.findBookings(ctx));
    app.get('/bookings/:id', bookings.findBookings(ctx));
  };
};
