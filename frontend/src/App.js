import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventManagement from './pages/eventmanagement';
import AddEvent from './pages/addEvent';
import EditEvent from './pages/editEvent';
import AttendeeManagement from './pages/AtdManagement';
import TaskTracker from './pages/TaskTracker';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'shaata',
      description: 'mukli',
      location: 'dsu',
      date: '2024-12-25',
    },
    {
      id: 2,
      name: 'tunni',
      description: 'gugur shaata',
      location: 'kaal sandi',
      date: '2024-12-30',
    },
  ]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  return (
    <div>
      
    <Router>
      <Routes>
        <Route path="/" element={<EventManagement events={events} />} />
        <Route path="/add-event" element={<AddEvent onAddEvent={handleAddEvent} />} />
        <Route path="/edit-event/:id" element={<EditEvent events={events} setEvents={setEvents} />} />
        <Route path="/attendee-management" element={<AttendeeManagement />} />
        <Route path="/task-tracker" element={<TaskTracker />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
