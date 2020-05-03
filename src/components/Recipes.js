/* eslint-disable no-trailing-spaces */
import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recipes = ({ recipes }) => (
  <div className="container">
    <div className="row">
      {recipes.map(res => 
      { 
        return (
          <div key={res.idMeal} className="col-md-4" style={{ marginBottom: '2rem' }}>
            <div className="recipes__box">
              <img className="recipe__box-img" src={res.strMealThumb} alt={res.strMeal} />
              <div className="recipe__text">
               <h5 className="recipes__title">
                 {res.strMeal.length < 20 ? `${res.strMeal}` : `${res.strMeal.substring(0, 25)}...`}
               </h5>
                <p className="recipes__subtitle">
                Publisher: 
                  <span>{res.strMeal }</span>
                </p>
              </div>
            <button className="recipe_buttons" type="button">
              <Link to={ {pathname: `/recipe/${ res.idMeal }`, state: {recipe: res.strMeal}} }>View Recipe</Link>
            </button>
          </div>
        </div>
      );
      })}
    </div>
  </div>
);
Recipes.propTypes = {
  recipes: Proptypes.instanceOf(Array).isRequired,
};

export default Recipes;
