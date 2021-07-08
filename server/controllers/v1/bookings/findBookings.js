const { listAll, findOne } = require('../../../../db/mongodb/models/bookings');


module.exports = (ctx) => {
  return async (req, res) => {
    const { headers, params, query, body } = req;
    try {
      if (params.id) {
        const result = await findOne(params.id);
        return res.status(200).send(result);
      }
      const result = await listAll();
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
};
