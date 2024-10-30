import React from 'react';
import TaskList from '../components/TaskList';
import { useParams } from 'react-router-dom';

const CategoryView = ({ tasks, dispatch }) => {
  const { name } = useParams();

  return (
    <div className="container mt-3">
      <h2>Tasks in {name}</h2>
      <TaskList tasks={tasks} category={name} dispatch={dispatch} />
    </div>
  );
};

export default CategoryView;
