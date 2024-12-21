let events = [];
let attendees = [];
let tasks = [];

const createEvent = (event) => {
  events.push(event);
  return event;
};

const getAllEvents = () => {
  return events;
};

const updateEvent = (id, updatedEvent) => {
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...updatedEvent };
    return events[index];
  }
  return null;
};

const deleteEvent = (id) => {
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    return events.splice(index, 1);
  }
  return null;
};

const addAttendee = (attendee) => {
  attendees.push(attendee);
  return attendee;
};

const getAllAttendees = () => {
  return attendees;
};

const deleteAttendee = (id) => {
  const index = attendees.findIndex(attendee => attendee.id === id);
  if (index !== -1) {
    return attendees.splice(index, 1);
  }
  return null;
};

const createTask = (task) => {
  tasks.push(task);
  return task;
};

const getTasksForEvent = (eventId) => {
  return tasks.filter(task => task.eventId === eventId);
};

const updateTaskStatus = (id, status) => {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.status = status;
    return task;
  }
  return null;
};

module.exports = {
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
};