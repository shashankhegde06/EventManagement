import React from 'react';

const Event = ({ event, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{event.name}</h2>
      <p>{event.description}</p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <div className="flex space-x-4 mt-4">
        <button
          className="btn btn-primary"
          onClick={() => onEdit(event.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onDelete(event.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Event;
