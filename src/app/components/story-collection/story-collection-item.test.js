import React from 'react';
import renderer from 'react-test-renderer';
import StoryCollectionItem from './story-collection-item';

const dummyData = {
  id: '/content/ob99k13ket8ndbhstm7boctldn8joq1o',
  channel: {
    headline: 'About us',
    url: {
      canonical: 'https://www.economist.com/help/about-us',
      __typename: 'URL',
    },
    __typename: 'Content',
  },
  headline: 'Who has the right to judge Americans?',
  subheadline: 'The Economist explains',
  description:
    'A minor fraud case provokes a Supreme Court challenge to the expanding power of administrative agencies in government',
  byline: 'T.E. | NEW YORK',
  url: {
    canonical:
      'https://www.economist.com/the-economist-explains/2018/05/15/who-has-the-right-to-judge-americans',
    __typename: 'URL',
  },
  image: {
    main: {
      width: 1280,
      height: 720,
      url: {
        canonical:
          'https://www.economist.com/sites/default/files/20180512_BLP509.jpg',
        __typename: 'URL',
      },
      __typename: 'Content',
    },
    __typename: 'Media',
  },
  __typename: 'Content',
};

describe('StoryCollectionItem', () => {
  it('should match snapshot without className', () => {
    const tree = renderer
      .create(<StoryCollectionItem data={dummyData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with className', () => {
    const tree = renderer
      .create(<StoryCollectionItem className="class" data={dummyData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
