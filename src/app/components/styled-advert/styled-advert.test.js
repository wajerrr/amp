import React from 'react';
import renderer from 'react-test-renderer';
import StyledInlineAd from './styled-advert';

describe('InlineAd', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <StyledInlineAd
          ad={{ siteCode: '1234', zoneCode: 'ABCD', environment: 'dev' }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});