const { findByHotelId } = require('../../../../db/mongodb/models/bookings');


module.exports = (ctx) => {
  return async (req, res) => {
    const { headers, params, query, body } = req;
    try {
      if (params.id) {
        const result = await findByHotelId(params.id);
        return res.status(200).send(result);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
};
