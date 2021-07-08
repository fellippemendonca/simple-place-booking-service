module.exports = {
  places: {
    findPlaces: require('./places/findPlaces'),
  },
  hotels: {
    findHotels: require('./hotels/findHotels'),
    createHotels: require('./hotels/createHotels'),
    listHotelBookings: require('./hotels/listHotelBookings'),
  },
  guests: {
    findGuests: require('./guests/findGuests'),
    createGuests: require('./guests/createGuests'),
  },
  bookings: {
    findBookings: require('./bookings/findBookings'),
    createBookings: require('./bookings/createBookings'),
  },
}
