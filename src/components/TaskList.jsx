import React, { useState, useEffect } from 'react';
import moment from 'moment';

const TaskList = ({ tasks, category, dispatch }) => {
  const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  return (
    <div className="card shadow-sm my-4">
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Task List</h5>
        <ul className="list-group list-group-flush">
          {tasks
            .filter(task => !category || task.category === category)
            .map(task => (
              <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-bold">{task.title}</span>
                  <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                    Added on: {task.timestamp}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          {tasks.filter(task => !category || task.category === category).length === 0 && (
            <li className="list-group-item text-center text-muted">
            Welcome to Task Manager! Start organizing your day by adding tasks—your progress is safely saved in your browser.
          </li>          
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
