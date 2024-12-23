import React, { useState } from 'react';
import Navbar from '../components/nav';

const AttendeeManagement = () => {
  const [attendees, setAttendees] = useState([
    { id: 1, name: 'John Doe', assignedEvent: 'Hackathon' },
    { id: 2, name: 'Jane Smith', assignedEvent: 'Workshop' },
  ]);
  const [newAttendee, setNewAttendee] = useState('');
  const [newEvent, setNewEvent] = useState('');

  const handleAddAttendee = () => {
    if (newAttendee && newEvent) {
      setAttendees([
        ...attendees,
        { id: attendees.length + 1, name: newAttendee, assignedEvent: newEvent },
      ]);
      setNewAttendee('');
      setNewEvent('');
    }
  };

  const handleRemoveAttendee = (id) => {
    setAttendees(attendees.filter((attendee) => attendee.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Attendee Management</h1>
        <div className="mb-4">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Attendee Name"
            value={newAttendee}
            onChange={(e) => setNewAttendee(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Assigned Event"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAddAttendee}>
            Add Attendee
          </button>
        </div>
        <ul className="list-group">
          {attendees.map((attendee) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={attendee.id}>
              {attendee.name} - {attendee.assignedEvent}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveAttendee(attendee.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AttendeeManagement;
