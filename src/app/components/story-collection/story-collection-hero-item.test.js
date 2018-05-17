import React from 'react';
import renderer from 'react-test-renderer';
import StoryCollectionHeroItem from './story-collection-hero-item';

describe('StoryCollectionHeroItem', () => {
  it('should match snapshot without className', () => {
    const tree = renderer
      .create(
        <StoryCollectionHeroItem
          headline="Who has the right to judge Americans?"
          url="https://www.economist.com/the-economist-explains/2018/05/15/who-has-the-right-to-judge-americans"
          image={{
            width: 1280,
            height: 720,
            url: {
              canonical:
                'https://www.economist.com/sites/default/files/20180512_BLP509.jpg',
            },
          }}
          subheadline="The Economist explains"
          channelUrl="https://www.economist.com/help/about-us"
          channelHeadline="About us"
          description="A minor fraud case provokes a Supreme Court challenge to the expanding power of administrative agencies in government"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with className', () => {
    const tree = renderer
      .create(
        <StoryCollectionHeroItem
          className="class"
          headline="Who has the right to judge Americans?"
          url="https://www.economist.com/the-economist-explains/2018/05/15/who-has-the-right-to-judge-americans"
          image={{
            width: 1280,
            height: 720,
            url: {
              canonical:
                'https://www.economist.com/sites/default/files/20180512_BLP509.jpg',
            },
          }}
          subheadline="The Economist explains"
          channelUrl="https://www.economist.com/help/about-us"
          channelHeadline="About us"
          description="A minor fraud case provokes a Supreme Court challenge to the expanding power of administrative agencies in government"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
