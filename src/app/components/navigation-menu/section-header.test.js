import React from 'react';
import renderer from 'react-test-renderer';
import HeaderSection from './section-header';

describe('HeaderSection', () => {
  it('should match snapshot for a normal headerLink', () => {
    const tree = renderer
      .create(<HeaderSection title="headerSection" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
