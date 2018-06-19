import React from 'react';
import renderer from 'react-test-renderer';
import TitleWithAccordionList from './section-list';

describe('TitleWithAccordionList', () => {
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
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <TitleWithAccordionList
          title={sectionList.headline}
          list={sectionList}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
