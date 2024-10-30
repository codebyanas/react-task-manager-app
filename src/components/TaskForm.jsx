import React, { useState } from 'react';
import moment from 'moment';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a'); // Get current date and time
      onSubmit({ title, category, timestamp });
      setTitle('');
      setCategory('');
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-center mb-4">Add a New Task</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              spellCheck="false"
              required
            />
          </div>
          <div className="mb-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
              required
            >
              <option value="" disabled>Select Category</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
