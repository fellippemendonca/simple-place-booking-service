const mongoose = require('mongoose');


const ObjectId = mongoose.Types.ObjectId; 
const Schema = mongoose.Schema;


const BookingsSchema = new Schema({
  hotelId: { type: ObjectId, required: true },
  guestName: { type: String, required: true },
  guestEmail: { type: String, required: true },
  guestPhone: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  stars: { type: Number, enum:[1,2,3,4,5] },
});

const Bookings = mongoose.model('Bookings', BookingsSchema );


async function listAll() {
  try {
    const result = await Bookings.find().exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return [];
};

async function findOne(_id) {
  try {
    const result = await Bookings.findOne({ _id }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function findByHotelId(hotelId) {
  try {
    const result = await Bookings.find({ hotelId }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function create(payload) {
  try {
    const checkDatesQuery = {
      hotelId: payload.hotelId,
      $and: [
        { checkInDate: { $gte: payload.checkInDate } },
        { checkOutDate: { $lte: payload.checkOutDate } }
      ]
    };
    const checkDates = await Bookings.find(checkDatesQuery).exec();
    if (checkDates.length < 10) {
      const booking = new Bookings(payload);
      const result = await booking.save();
      return result;
    }
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function update(payload) {
  try {
    const { _id } = payload;
    const found = await Bookings.findOne({ _id }).exec();
    found.overwrite(payload);
    const result = await found.save();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function patch(payload) {
  try {
    const { _id } = payload;
    const result = await Bookings.updateOne({ _id }, { $set: payload }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function remove(_id) {
  try {
    const result = await Bookings.deleteOne({ _id }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

module.exports = {
  listAll,
  findOne,
  findByHotelId,
  create,
  update,
  patch,
  remove
};
