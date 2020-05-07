import { addCategories } from '../../redux/actions/index';
import categories from '../../redux/reducers/categories';

describe('Reducer Category', () => {
  it('should return default state', () => {
    const newState = categories(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if it receives a valid type', () => {
    const category = ['One', 'Two', 'Three'];
    const action = addCategories(category);
    const newState = categories(undefined, action);
    expect(newState.length).toEqual(3);
  });
});
