import { addCategories, addRecipes, changeFilter } from '../../redux/actions/index';

const recipes = [
  {
    name: 'Bread and Butter',
    id: 22,
  },
  {
    name: 'Burgers',
    id: 1,
  },
];

const categories = ['One', 'Two', 'Three'];

describe('changeFilter', () => {
  it('should return type and a payload containing the category', () => {
    const values = Object.values(changeFilter('Chicken'));

    expect(values).toEqual(['CHANGE_FILTER', 'Chicken']);
  });
});

describe('addRecipes', () => {
  it('should return type and a payload containing the new array of recipes', () => {
    const values = Object.values(addRecipes(recipes));

    expect(values).toEqual(['ADD_RECIPES', recipes]);
  });
});

describe('addCategories', () => {
  it('should return type and a payload containing the new array of categories', () => {
    const values = Object.values(addCategories(categories));

    expect(values).toEqual(['ADD_CATEGORIES', categories]);
  });
});
