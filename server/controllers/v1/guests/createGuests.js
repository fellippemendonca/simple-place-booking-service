const { create } = require('../../../../db/mongodb/models/guests');


module.exports = (ctx) => {
  return async (req, res) => {
    const { headers, params, query, body } = req;
    try {
      if (body) {
        const result = await create(body);
        return res.status(200).send(result);
      }
      throw new Error('Request body not found.');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
};
