const { create, createMany } = require('../../../../db/mongodb/models/hotels');
const placesFinder = require('../../../../lib/placesFinder');


async function loadLocations({ geoLocation, search }) {
  try {
    const splitGeo = geoLocation.split(',');
    const lat = splitGeo[0];
    const lon = splitGeo[1];
    const { items: places } = await placesFinder.getLocation({ lat, lon, search });
    if (places) {
      return places.map(place => {
        const { position: { lat, lng } } = place;
        place.location = { coordinates: [lng, lat] };
        return place;
      });
    }
    throw new Error('Problem while getting locations!');
  } catch(err) {
    console.log(err.stack);
  }
  return [];
}

module.exports = (ctx) => {
  return async (req, res) => {
    const { headers, params, body } = req;
    try {
      const { geoLocation } = body;
      const places = await loadLocations({ geoLocation, search: 'hotel' });
      if (places.length) {
        const result = await createMany(places);
        return res.status(200).send(result);
      }
      throw new Error('Request body not found.');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
};
