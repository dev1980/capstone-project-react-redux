import {actions} from '../actions/index';

const { ADD_RECIPES } = actions;

const recipeReducer = (state = [], actions) => {
  switch(actions.type) {
    case ADD_RECIPES:
    return actions.payload
    default:
      return state
}
}

export default recipeReducer