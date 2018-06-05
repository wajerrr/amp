import React from 'react';
import renderer from 'react-test-renderer';
import InlineAd from './inline-ad';

describe('InlineAd', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<InlineAd siteCode="1234" zoneCode="ABCD" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
