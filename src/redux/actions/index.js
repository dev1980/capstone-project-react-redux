export const actions = {
  ADD_RECIPES: 'ADD_RECIPES',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
  CHANGE_FILTER: 'CHANGE_FILTER',
};

export const addRecipes = recipes => (
  {
    type: actions.ADD_RECIPES,
    payload: recipes,
  }
);

export const addCategories = categories => ({
  type: actions.ADD_CATEGORIES,
  payload: categories,
});

export const changeFilter = filter => ({
  type: actions.CHANGE_FILTER,
  payload: filter,
});
