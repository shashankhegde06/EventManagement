const express = require('express');
const router = express.Router();
const {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
  addAttendee,
  getAllAttendees,
  deleteAttendee,
  createTask,
  getTasksForEvent,
  updateTaskStatus
} = require('./models');

// Event Management API
router.post('/events', (req, res) => {
  const event = createEvent(req.body);
  res.status(201).json(event);
});

router.get('/events', (req, res) => {
  res.json(getAllEvents());
});

router.put('/events/:id', (req, res) => {
  const updatedEvent = updateEvent(req.params.id, req.body);
  if (updatedEvent) {
    res.json(updatedEvent);
  } else {
    res.status(404).send('Event not found');
  }
});

router.delete('/events/:id', (req, res) => {
  const deletedEvent = deleteEvent(req.params.id);
  if (deletedEvent) {
    res.status(204).send();
  } else {
    res.status(404).send('Event not found');
  }
});

// Attendee Management API
router.post('/attendees', (req, res) => {
  const attendee = addAttendee(req.body);
  res.status(201).json(attendee);
});

router.get('/attendees', (req, res) => {
  res.json(getAllAttendees());
});

router.delete('/attendees/:id', (req, res) => {
  const deletedAttendee = deleteAttendee(req.params.id);
  if (deletedAttendee) {
    res.status(204).send();
  } else {
    res.status(404).send('Attendee not found');
  }
});

// Task Management API
router.post('/tasks', (req, res) => {
  const task = createTask(req.body);
  res.status(201).json(task);
});

router.get('/tasks/:eventId', (req, res) => {
  res.json(getTasksForEvent(req.params.eventId));
});

router.put('/tasks/:id/status', (req, res) => {
  const updatedTask = updateTaskStatus(req.params.id, req.body.status);
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).send('Task not found');
  }
});

module.exports = router;