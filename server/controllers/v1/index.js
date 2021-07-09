module.exports = {

  places: {
    findPlaces: require('./places/findPlaces'),
  },
  
  hotels: {
    findHotels: require('./hotels/findHotels'),
    createHotels: require('./hotels/createHotels'),
    listHotelBookings: require('./hotels/listHotelBookings'),
  },
  
  bookings: {
    findBookings: require('./bookings/findBookings'),
    createBookings: require('./bookings/createBookings'),
  },
  
}
