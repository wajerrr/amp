import React from 'react';
import renderer from 'react-test-renderer';
import StyledTime from './styled-time';

describe('StyledTime', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<StyledTime time="May 8th 2018, 19:24" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
