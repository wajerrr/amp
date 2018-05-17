import React from 'react';
import renderer from 'react-test-renderer';
import StoryCollection from './story-collection';

const dummyData = {
  tegID: '9qe6f6cm77btf0phaepjui01ckh6rfpu',
  id: '/content/9qe6f6cm77btf0phaepjui01ckh6rfpu',
  hasPart: {
    parts: [
      {
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
      },
      {
        id: '/content/a762digtqmam8u9l96e0qm5qdp26plvi',
        channel: {
          headline: 'About us',
          url: {
            canonical: 'https://www.economist.com/help/about-us',
            __typename: 'URL',
          },
          __typename: 'Content',
        },
        headline: 'Protests on Gaza’s border with Israel turn deadly',
        subheadline: 'Anger in Gaza, joy in Jerusalem',
        description:
          'Dozens of Palestinians have been killed, as Israel celebrates America’s embassy move to Jerusalem',
        byline: '',
        url: {
          canonical:
            'https://www.economist.com/middle-east-and-africa/2018/05/14/protests-on-gazas-border-with-israel-turn-deadly',
          __typename: 'URL',
        },
        image: {
          main: {
            width: 1280,
            height: 720,
            url: {
              canonical:
                'https://www.economist.com/sites/default/files/images/2018/05/articles/main/20180519_map501.jpg',
              __typename: 'URL',
            },
            __typename: 'Content',
          },
          __typename: 'Media',
        },
        __typename: 'Content',
      },
      {
        id: '/content/dllu13tsk5i7cphqrvjm4hnch1n4bmmd',
        channel: {
          headline: 'About us',
          url: {
            canonical: 'https://www.economist.com/help/about-us',
            __typename: 'URL',
          },
          __typename: 'Content',
        },
        headline: 'Lessons to a columnist’s previous self',
        subheadline: 'Buttonwood',
        description: 'Thinking outside the police box',
        byline: '',
        url: {
          canonical:
            'https://www.economist.com/finance-and-economics/2018/05/12/lessons-to-a-columnists-previous-self',
          __typename: 'URL',
        },
        image: {
          main: {
            width: 1280,
            height: 720,
            url: {
              canonical:
                'https://www.economist.com/sites/default/files/images/articles/20180512_FND001.jpg',
              __typename: 'URL',
            },
            __typename: 'Content',
          },
          __typename: 'Media',
        },
        __typename: 'Content',
      },
    ],
    __typename: 'HasPart',
  },
  __typename: 'Content',
};

describe('StoryCollection', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<StoryCollection data={dummyData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
