const express = require("express");
const router = express.Router();
const Attendee = require("../models/Attendee");

// Add a new attendee
router.post("/", async (req, res) => {
  try {
    const attendee = new Attendee(req.body);
    await attendee.save();
    res.status(201).json(attendee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all attendees
router.get("/", async (req, res) => {
  try {
    const attendees = await Attendee.find();
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an attendee
router.put("/:id", async (req, res) => {
  try {
    const attendee = await Attendee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(attendee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an attendee
router.delete("/:id", async (req, res) => {
  try {
    await Attendee.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
