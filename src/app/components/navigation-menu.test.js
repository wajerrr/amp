import React from 'react';
import renderer from 'react-test-renderer';
import NavigationMenu from './navigation-menu';
import * as navigationData from '../../../mockNavData.json';

describe('NavigationMenu', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<NavigationMenu data={navigationData} containerId="sidebar" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
