import React from 'react';
import { Link } from 'react-router-dom';

const CategoryFilter = ({ categories }) => (
  <div>
    {categories.map(category => (
      <Link key={category} to={`/category/${category}`} className="btn btn-outline-primary m-1">
        {category}
      </Link>
    ))}
  </div>
);

export default CategoryFilter;
