const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const HotelSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  address: Object,
  contacts: [Object],
  openingHours: [Object],
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: false,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
});

const Hotels = mongoose.model('Hotels', HotelSchema );


async function listAll() {
  try {
    const result = await Hotels.find().exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return [];
};

async function findOne(_id) {
  try {
    const result = await Hotels.findOne({ _id }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function create(payload) {
  try {
    const hotels = new Hotels(payload);
    const result = await hotels.save();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function update(payload) {
  try {
    const { _id } = payload;
    const found = await Hotels.findOne({ _id }).exec();
    if (found) {
      found.overwrite(payload);
      const result = await found.save();
      return result;
    }
    throw new Error('');
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function patch(payload) {
  try {
    const { _id } = payload;
    const result = await Hotels.updateOne({ _id }, { $set: payload }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function remove(_id) {
  try {
    const result = await Hotels.deleteOne({ _id }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

module.exports = {
  listAll,
  findOne,
  create,
  update,
  patch,
  remove
};
