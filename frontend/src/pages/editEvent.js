import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEvent = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate();

  // Event state
  const [event, setEvent] = useState({
    name: '',
    description: '',
    location: '',
    date: '',
  });

  // Mock function to get the event data (You can replace it with an API call)
  useEffect(() => {
    // Simulate fetching event data by ID (you can replace this with actual fetch API)
    const fetchedEvent = {
      id: id,
      name: 'Workshop',
      description: 'A React.js hands-on session.',
      location: 'Tech Hub',
      date: '2024-12-30',
    };
    setEvent(fetchedEvent);
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update the event (like submitting the updated event data)
    console.log('Event updated:', event);
    navigate('/event-management'); // Redirect to the event management page after submission
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-6">
        <h2 className="text-center mb-4">Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={event.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              value={event.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={event.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Event Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={event.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
