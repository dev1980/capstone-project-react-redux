import React from 'react';
import Proptypes from 'prop-types';

const CategoryFilter = ({ changeFilter, categories, filter }) => (
  <div className="select-category">
  <select onChange={e => changeFilter(e.target.value)} className="header-select mb-5" value={filter}>
    <option value="All Categories">All Categories</option>
    {categories.map(category => (
      <option key={`${category.strCategory}-option`} value={category.strCategory}>
        {category.strCategory}
      </option>
    ))}
  </select>
  </div>
);

CategoryFilter.propTypes = {
  changeFilter: Proptypes.func.isRequired,
  filter: Proptypes.string.isRequired,
  categories: Proptypes.instanceOf(Array).isRequired,
};

export default CategoryFilter;
