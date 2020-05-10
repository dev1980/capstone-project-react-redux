/* eslint-disable no-trailing-spaces */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

const testAttribute = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};
const recipes = [{
  strMeal: 'Peanut Butter Cookies',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
}];

const categories = ['One', 'Two', 'Three'];

const setup = (props = {}) => {
  const component = shallow(
    <App.WrappedComponent 
      filter={props.filter} 
      categories={props.categories} 
      changeFilter={props.changeFilter} 
      recipes={props.recipes} 
    />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    filter: '',
    categories,
    recipes,
    changeFilter: () => null,
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render without errors', () => {
    const wrapper = testAttribute(component, '.App');
    expect(wrapper.length).toEqual(1);
  });
});
