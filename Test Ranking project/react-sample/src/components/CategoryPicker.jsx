import React from 'react';
import { CATEGORIES } from '../data/categories';

const CategoryPicker = ({ category, onCategoryChange }) => (
  <div className="category-selector">
    {Object.entries(CATEGORIES).map(([key, cat]) => (
      <button
        key={key}
        className={`category-btn ${category === key ? 'active' : ''}`}
        onClick={() => onCategoryChange(key)}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default CategoryPicker;
