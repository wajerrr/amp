import React from 'react';
import renderer from 'react-test-renderer';
import HeaderLink from './section-header-link';

describe('HeaderLink', () => {
  const headerLink = {
    headline: 'headerLink',
    id: 'header-link',
    url: {
      canonical: 'www.headerLink.com',
    },
  };
  const sectionList = {
    headline: 'Topics',
    id: '21741809',
    hasPart: {
      parts: [
        {
          headline: 'Latest updates',
          id: 'storyCollection_21741809_0',
          url: {
            canonical: 'https://www.economist.com/latest-updates',
          },
        },
      ],
    },
  };
  it('should match snapshot for a normal headerLink', () => {
    const tree = renderer.create(<HeaderLink link={headerLink} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot for a sectionList', () => {
    const tree = renderer.create(<HeaderLink link={sectionList} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
