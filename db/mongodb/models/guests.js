const mongoose = require('mongoose');


const ObjectId = mongoose.Types.ObjectId; 
const Schema = mongoose.Schema;


const GuestSchema = new Schema({
  title: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: Object,
  contacts: {
    email: { type: String, required: true },
    celphone: { type: String, required: true },
  },
});

const Guests = mongoose.model('Guests', GuestSchema );


async function listAll() {
  try {
    const result = await Guests.find().exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return [];
};

async function findOne(id) {
  try {
    const objectId = ObjectId(id);
    const result = await Guests.findOne(objectId).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function create(payload) {
  try {
    const guest = new Guests(payload);
    const result = await guest.save();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function update(payload) {
  try {
    const { _id } = payload;
    const objectId = ObjectId(_id);
    const found = await Guests.findOne(objectId).exec();
    if (found) {
      found.overwrite(payload);
      const result = await found.save();
      return result;
    }
    throw new Error('Entity not found');
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function patch(payload) {
  try {
    const { _id } = payload;
    const objectId = ObjectId(_id);
    const result = await Guests.updateOne(objectId, { $set: payload }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function remove(id) {
  try {
    const objectId = ObjectId(id);
    const result = await Guests.deleteOne(objectId).exec();
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
