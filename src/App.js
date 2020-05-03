/* eslint-disable no-trailing-spaces, quotes */
import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Recipes from './components/Recipes';
import { addRecipes, addCategories, changeFilter } from './actions/index';
import CategoryFilter from './components/CategoryFilter';

class App extends Component {
   getRandomAlphabet = () => {
     const alphabets = 'bcefghjklmnprstv'.split('');
     const randomNumber = Math.floor(Math.random() * 16);
     return alphabets[randomNumber];
   };
  
   getRecipes = async () => {
     const randomAlphabet = this.getRandomAlphabet();
     try {
       const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${randomAlphabet}`);
       const { meals } = await res.json();
       return meals;
     } catch (error) {
       throw new Error(error.message);
     }
   };

   initialize = async props => {
     const {
       recipes, addCategories, addRecipes,
     } = props;
     try {
       let myRecipes;
       if (recipes.length === 0) {
         myRecipes = await this.getRecipes();
       } else {
         myRecipes = recipes;
       }
       const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
       const { meals } = await res.json();
       addCategories(meals);
       addRecipes(myRecipes);
     } catch (error) {
       throw new Error(error.message);
     }
   };

  componentDidMount = () => {
    this.initialize(this.props);
  };
 
  render() {
    const { 
      filter, recipes, changeFilter, categories, 
    } = this.props;
    const filterRecipe = filter === 'All Categories'
      ? recipes
      : recipes.filter(recipe => recipe.strCategory === filter);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header> 
        <CategoryFilter 
          changeFilter={changeFilter} 
          filter={filter} 
        categories={categories} />
        <Recipes recipes={filterRecipe} />
      </div>
    );
  }
}
const mapStateToProps = ({ recipes, categories, filter }) => ({
  recipes, categories, filter,
});
const mapDispatchToProps = dispatch => ({
  addRecipes: recipes => dispatch(addRecipes(recipes)),
  addCategories: categories => dispatch(addCategories(categories)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

App.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
