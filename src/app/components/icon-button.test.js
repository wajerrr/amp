import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from './icon-button';

describe('IconButton', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<IconButton onProps="toggleMenu" icon="hambuger" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
