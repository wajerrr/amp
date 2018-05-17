import React from 'react';
import renderer from 'react-test-renderer';
import StoryCollectionItem from './story-collection-item';

describe('StoryCollectionItem', () => {
  it('should match snapshot without className', () => {
    const tree = renderer
      .create(
        <StoryCollectionItem
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
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with className', () => {
    const tree = renderer
      .create(
        <StoryCollectionItem
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
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
