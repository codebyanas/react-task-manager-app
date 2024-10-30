import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryView from './pages/CategoryView';
import { v4 as uuidv4 } from 'uuid';

const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className="content">
        <Navbar /> {/* Navbar component */}
        <Routes>
          <Route path="/" element={<Home tasks={tasks} dispatch={dispatch} />} />
          <Route path="/category/:name" element={<CategoryView tasks={tasks} dispatch={dispatch} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
