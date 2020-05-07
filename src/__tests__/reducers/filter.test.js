import {changeFilter} from '../../redux/actions/index';
import filterReducer from '../../redux/reducers/filter';

describe('Reducer Category', () => {
  it('should return default state', () => {
    const newState = filterReducer(undefined, {});
    expect(newState).toEqual('All Categories');
  });

  it('should return new state if it receives a valid type', () => {
    const filter = 'Pork Cassoulet';
    const action = changeFilter(filter);
    const newState = filterReducer(undefined, action);
    expect(newState).toEqual(filter);
  });
});
