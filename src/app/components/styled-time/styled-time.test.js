import React from 'react';
import renderer from 'react-test-renderer';
import StyledTime from './styled-time';

describe('StyledTime', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <StyledTime itemProp="datePublished" content="2018-04-16T07:01:00.000Z">
          Apr 16th 2018
        </StyledTime>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
