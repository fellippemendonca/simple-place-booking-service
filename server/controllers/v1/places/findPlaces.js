const { listAll, findOne } = require('../../../../db/mongodb/models/bookings');
const placesFinder = require('../../../../lib/placesFinder');




module.exports = (ctx) => {
  return async (req, res) => {
    const { headers, params, query, body } = req;
    try {
      const { geoLocation, search } = query;
      const splitGeo = geoLocation.split(',');
      const lat = splitGeo[0];
      const lon = splitGeo[1];
      const places = await placesFinder.getLocation({ lat, lon, search });
      return res.status(200).send(places);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
};
