import React from 'react';
import renderer from 'react-test-renderer';
import SectionLink from './story-collection-section-link';

describe('SectionLink', () => {
  it('should match snapshot without className', () => {
    const tree = renderer
      .create(<SectionLink href="/">link</SectionLink>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with className', () => {
    const tree = renderer
      .create(
        <SectionLink href="/" className="class">
          link
        </SectionLink>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
