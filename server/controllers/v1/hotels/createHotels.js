const { create } = require('../../../../db/mongodb/models/hotels');


module.exports = (ctx) => {
  return async (req, res) => {
    const { headers, params, query, body } = req;
    try {
      if (body) {
        const { position: { lat, lng } } = body;
        body.location = {
          coordinates: [lng, lat]
        }
        delete body.position;
        const result = await create(body);
        return res.status(200).send(result);
      }
      throw new Error('Request body not found.');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
};
