import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Recipe extends Component {
  render() {
    const { recipes, location } = this.props;
    const recipe = recipes.find(el => el.strMeal === location.state.recipe);
    const showRecipe = recipe ? (
      <div className="container">
        <div className="active-recipe">
          <img className="active-recipe__img" src={ recipe.strMealThumb } alt={ recipe.strMeal }/>
          <h3 className="active-recipe__title">{ recipe.strMeal }</h3>
          <h4 className="active-recipe__publisher">
          Category: 
          <span>{ recipe.strCategory }</span>
          </h4>
          <p className="active-recipe__website">
          YouTube: 
            <span><a href={ recipe.strYoutube }>{ recipe.strMeal  }</a></span>
          </p>
          <button className="active-recipe__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
    </div>
    ) : <h4>Recipe Not Found</h4>
    return showRecipe;
  }
}

Recipe.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
}

const mapStateToProps=({recipes}) =>({
  recipes,
})


export default connect(mapStateToProps)(Recipe);

