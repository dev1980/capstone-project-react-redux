import {addRecipes} from '../../redux/actions/index';
import recipeReducer from '../../redux/reducers/recipes';

const recipe = [
  {
    name: 'Bread and Butter',
    id: 22,
  },
  {
    name: 'Burgers',
    id: 1,
  },
];

describe('Category Reducer', () => {
  it('should return default state', () => {
    const newState = recipeReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if it receives a valid type', () => {
    const action = addRecipes(recipe);
    const newState = recipeReducer(undefined, action);
    expect(newState).toEqual(recipe);
  });
});
