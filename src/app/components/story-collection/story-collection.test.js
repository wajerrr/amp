import React from 'react';
import renderer from 'react-test-renderer';
import StoryCollection from './story-collection';

const dummyData = {
  tegID: '9qe6f6cm77btf0phaepjui01ckh6rfpu',
  id: '/content/9qe6f6cm77btf0phaepjui01ckh6rfpu',
  hasPart: {
    parts: [
      {
        id: '/content/agueru9m3v9iq168d8njr91i9mna2u1p',
        channel: {
          headline: 'About us',
          url: {
            canonical: 'https://www.economist.com/help/about-us',
            __typename: 'URL',
          },
          __typename: 'Content',
        },
        articleSection: {
          internal: [
            {
              url: {
                canonical:
                  'https://www.economist.com/sections/business-finance',
                __typename: 'URL',
              },
              headline: 'Business and finance',
              __typename: 'Content',
            },
          ],
          __typename: 'Taxonomies',
        },
        headline: 'Gazprom is enjoying a sales boom in Europe',
        subheadline: 'Out of the frying pan',
        description:
          'But the Russian gas company is coming into America’s line of fire',
        byline: '',
        url: {
          canonical:
            'https://www.economist.com/business/2018/05/23/gazprom-is-enjoying-a-sales-boom-in-europe',
          __typename: 'URL',
        },
        image: {
          main: {
            id: '/content/aqu0nnkp43sleq91fj9raj90tf9qlv3c',
            width: 1280,
            height: 720,
            url: {
              canonical:
                'https://www.economist.com/sites/default/files/images/2018/05/articles/main/20180526_wbp502.jpg',
              __typename: 'URL',
            },
            __typename: 'Content',
          },
          __typename: 'Media',
        },
        __typename: 'Content',
      },
      {
        id: '/content/to14jpglqmbofrb0qjtbp8jmv0mnnhau',
        channel: {
          headline: 'About us',
          url: {
            canonical: 'https://www.economist.com/help/about-us',
            __typename: 'URL',
          },
          __typename: 'Content',
        },
        articleSection: {
          internal: [
            {
              url: {
                canonical: 'https://www.economist.com/sections/culture',
                __typename: 'URL',
              },
              headline: 'Culture',
              __typename: 'Content',
            },
          ],
          __typename: 'Taxonomies',
        },
        headline: 'Philip Roth was one of America’s greatest novelists',
        subheadline: 'Theatre of one',
        description:
          'His real subject was not Jewishness, or New Jersey, but the human condition',
        byline: '',
        url: {
          canonical:
            'https://www.economist.com/books-and-arts/2018/05/23/philip-roth-was-one-of-americas-greatest-novelists',
          __typename: 'URL',
        },
        image: {
          main: {
            id: '/content/jl9f5cf6c36v5j5dk3ghmj51kt7l1mj6',
            width: 1280,
            height: 720,
            url: {
              canonical:
                'https://www.economist.com/sites/default/files/images/2018/05/articles/main/20180526_bkp004.jpg',
              __typename: 'URL',
            },
            __typename: 'Content',
          },
          __typename: 'Media',
        },
        __typename: 'Content',
      },
      {
        id: '/content/aki2kepcaa7vfc90lc0d843p3p87371b',
        channel: {
          headline: 'About us',
          url: {
            canonical: 'https://www.economist.com/help/about-us',
            __typename: 'URL',
          },
          __typename: 'Content',
        },
        articleSection: {
          internal: [
            {
              url: {
                canonical:
                  'https://www.economist.com/sections/economist-explains',
                __typename: 'URL',
              },
              headline: 'The Economist explains',
              __typename: 'Content',
            },
          ],
          __typename: 'Taxonomies',
        },
        headline: 'How California could split up',
        subheadline: 'The Economist explains',
        description:
          'Some locals have plans to carve two or even three states out of the Golden one',
        byline: 'G.F.',
        url: {
          canonical:
            'https://www.economist.com/the-economist-explains/2018/05/24/how-california-could-split-up',
          __typename: 'URL',
        },
        image: {
          main: {
            id: '/content/pa7r42okeqb57oa71q05sn66occpviqr',
            width: 1280,
            height: 720,
            url: {
              canonical:
                'https://www.economist.com/sites/default/files/20180526_BLP512.jpg',
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
