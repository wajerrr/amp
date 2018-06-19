import React from 'react';
import renderer from 'react-test-renderer';
import NestedAccordionList from './section-nested-list';

describe('NestedAccordionList', () => {
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
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <NestedAccordionList
          title={nestedSectionList.headline}
          list={nestedSectionList}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
