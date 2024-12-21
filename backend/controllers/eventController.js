const Event = require("../models/Event");

// Create an Event
const createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get All Events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an Event
const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) return res.status(404).json({ message: "Event not found." });
        res.json(event);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an Event
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found." });
        res.json({ message: "Event deleted successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createEvent,
    getAllEvents,
    updateEvent,
    deleteEvent,
};
