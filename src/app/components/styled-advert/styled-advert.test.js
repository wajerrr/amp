import React from 'react';
import renderer from 'react-test-renderer';
import StyledInlineAd from './styled-advert';

describe('InlineAd', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<StyledInlineAd siteCode="1234" zoneCode="ABCD" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
