/* eslint-disable no-trailing-spaces */
import React from 'react';
import { shallow } from 'enzyme';
import CategoryFilter from '../../components/CategoryFilter';

const testAttribute = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

const categories = ['One', 'Two', 'Three'];

const setup = (props = {}) => {
  const component = shallow(
    <CategoryFilter 
      filter={props.filter} 
      categories={props.categories} 
      changeFilter={props.changeFilter} 
    />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    filter: 'All Categories',
    categories,
    changeFilter: () => null,
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render without errors', () => {
    const wrapper = testAttribute(component, '.filter');
    const options = testAttribute(component, 'option');
    expect(wrapper.length).toEqual(1);
    expect(options.length).toEqual(4);
  });
});
