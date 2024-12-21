const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Create a Task
router.post("/", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get Tasks for an Event
router.get("/event/:eventId", async (req, res) => {
    try {
        const tasks = await Task.find({ event: req.params.eventId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update Task Status
router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
