import React from 'react';
import Proptypes from 'prop-types';


const CategoryFilter = ({ categories, changeFilter, filter }) => {
  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <div className="filter">
      <select onChange={handleChange} value={filter}>
        <option value="All Categories">All Categories</option>
        {categories.map(({ strCategory }) => (
          <option value={strCategory} key={`${strCategory}-option`}>
            {strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: Proptypes.func.isRequired,
  filter: Proptypes.string.isRequired,
  categories: Proptypes.instanceOf(Array).isRequired,
};

export default CategoryFilter;
