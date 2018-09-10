var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  spaceId: {
    type: Number,
    required: true
  },
  dayId: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Booking', BookingSchema);