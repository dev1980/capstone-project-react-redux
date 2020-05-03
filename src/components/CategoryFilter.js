import React from 'react';
import Proptypes from 'prop-types';


const CategoryFilter = ({ changeFilter, categories, filter }) => (
  <select onChange={e => changeFilter(e.target.value)} className="header-select mb-4" value={filter}>
    <option value="All Categories">All Categories</option>
    {categories.map(category => (
      <option key={`${category.strCategory}-option`} value={category.strCategory}>
        {category.strCategory}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  changeFilter: Proptypes.func.isRequired,
  filter: Proptypes.string.isRequired,
  categories: Proptypes.instanceOf(Array).isRequired,
};

export default CategoryFilter;
