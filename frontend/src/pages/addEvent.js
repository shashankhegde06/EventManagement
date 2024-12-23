import React, { useState } from 'react';

const AddEvent = () => {
  const [event, setEvent] = useState({
    name: '',
    description: '',
    location: '',
    date: '',
  });

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
    // Logic to add the event (like updating state or submitting to backend)
    console.log('Event added:', event);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-6">
        <h2 className="text-center mb-4">Add New Event</h2>
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
