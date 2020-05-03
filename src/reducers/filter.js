import { actions } from '../actions/index';

const { CHANGE_FILTER } = actions;

const filterReducer = (state = 'All Categories', actions) => {
  switch (actions.type) {
    case CHANGE_FILTER:
      return actions.payload
    default:
      return state;
  }
};

export default filterReducer;