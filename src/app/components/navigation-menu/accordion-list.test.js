import React from 'react';
import renderer from 'react-test-renderer';
import AccordionListItem from './accordion-list';

describe('AccordionListItem', () => {
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
  const nestedSectionList = {
    headline: 'Topics',
    id: '21741809',
    hasPart: {
      parts: [
        {
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
        },
      ],
    },
  };
  it('should match snapshot for a simple header link', () => {
    const tree = renderer
      .create(<AccordionListItem item={headerLink} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot for section list', () => {
    const tree = renderer
      .create(<AccordionListItem item={sectionList} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot for a nested section list', () => {
    const tree = renderer
      .create(<AccordionListItem item={nestedSectionList} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
