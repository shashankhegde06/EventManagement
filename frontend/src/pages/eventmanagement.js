import React from 'react';
import Event from '../components/Event';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/nav';

const EventManagement = ({ events }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // This will need to be handled in the parent component or via state lifting
  };

  const handleEdit = (id) => {
    navigate(`/edit-event/${id}`);
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
        
      <h1 className="text-2xl font-bold mb-4">Appinoda Event Management</h1>
      <button
        className="btn btn-success"
        onClick={() => navigate('/add-event')}
      >
        Add Event
      </button>
      <div className="grid grid-cols-1 gap-4">
        {events.map((event) => (
          <Event
            key={event.id}
            event={event}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default EventManagement;
