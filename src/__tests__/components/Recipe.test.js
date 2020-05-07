import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../../components/Recipe';

const testAttribute = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

const recipes = [{
  strMeal: 'Peanut Butter Cookies',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
}];

const setup = (props = {}) => {
  const component = shallow(<Recipe.WrappedComponent recipes={props.recipes} 
    location={props.location} 
  />);
  return component;
};

describe('Meal Component', () => {
  let component;

  beforeEach(() => {
    const props = {
      recipes,
      location: {
        state: {
          recipe: 'Peanut Butter Cookies',
        },
      },
    }
    component = setup(props);
  });

  it('should render without errors', () => {
    const element = testAttribute(component, '.container');
    expect(element.length).toEqual(1);

  });
});
