import {actions} from '../actions/index';

const { ADD_CATEGORIES } = actions;

const categoriesReducer = (state = [], actions) => {
  switch(actions.type) {
    case ADD_CATEGORIES:
    return actions.payload
    default:
      return state
}
}

export default categoriesReducer 