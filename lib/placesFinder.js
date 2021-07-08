const axios = require('axios');
const querystring = require('querystring');

const config = require('../config');


async function getLocation({ lat, lon, search }) {
  const queryObj = {
    at: `${lat},${lon}`,
    apiKey: config.HERE_API_KEY,
  };

  if (search) { queryObj.q = search }

  const query = querystring.encode(queryObj);
  try {
    const response = await axios({
      method: 'get',
      url: `${config.HERE_API_URL}?${query}`,
      responseType: 'application/json'
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

module.exports = { getLocation };
