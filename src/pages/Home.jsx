import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { v4 as uuidv4 } from 'uuid';

const Home = ({ tasks, dispatch }) => {
  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: { id: uuidv4(), ...task },
    });
  };

  return (
    <div className="container mt-3">
      <TaskForm onSubmit={addTask} />
      <h2 className='my-4'>All Tasks</h2>
      <TaskList tasks={tasks} dispatch={dispatch} category="" />
    </div>
  );
};

export default Home;
