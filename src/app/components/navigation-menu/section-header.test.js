import React from 'react';
import renderer from 'react-test-renderer';
import SectionHeader from './section-header';

describe('SectionHeader', () => {
  it('should match snapshot for a normal headerLink', () => {
    const tree = renderer
      .create(<SectionHeader title="headerSection" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
