import React, { useState } from 'react';
import Navbar from '../components/nav';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([
    { id: 1, event: 'Hackathon', description: 'Prepare slides', status: 'Pending' },
    { id: 2, event: 'Workshop', description: 'Set up laptops', status: 'Completed' },
  ]);

  const handleToggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
          : task
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Event</th>
                <th>Task</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.event}</td>
                  <td>{task.description}</td>
                  <td>{task.status}</td>
                  <td>
                    <button
                      className={`btn btn-${task.status === 'Pending' ? 'warning' : 'success'} btn-sm`}
                      onClick={() => handleToggleStatus(task.id)}
                    >
                      {task.status === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TaskTracker;
