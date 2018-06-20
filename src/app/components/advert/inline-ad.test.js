import React from 'react';
import renderer from 'react-test-renderer';
import InlineAd from './inline-ad';

describe('InlineAd', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <InlineAd
          ad={{ siteCode: '1234', zoneCode: 'ABCD', environment: 'dev' }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
