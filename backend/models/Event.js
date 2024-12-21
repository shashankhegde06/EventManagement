const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  date: Date,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attendee" }],
});

module.exports = mongoose.model("Event", EventSchema);
