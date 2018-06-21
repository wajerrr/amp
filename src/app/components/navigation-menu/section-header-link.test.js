import React from 'react';
import renderer from 'react-test-renderer';
import SectionHeaderLink from './section-header-link';

describe('HeaderLink', () => {
  const headerLink = {
    headline: 'headerLink',
    id: 'header-link',
    url: {
      canonical: 'www.headerLink.com',
    },
  };
  it('should match snapshot for a normal headerLink', () => {
    const tree = renderer
      .create(<SectionHeaderLink link={headerLink} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
