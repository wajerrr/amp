import React from 'react';
import renderer from 'react-test-renderer';
import StyledIconButton from './styled-icon-button';

describe('StyledIconButton', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<StyledIconButton onProps="toggleMenu" icon="hambuger" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
