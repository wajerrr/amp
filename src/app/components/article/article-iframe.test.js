import React from 'react';
import renderer from 'react-test-renderer';
import ArticleIframe from './article-iframe';

describe('ArticleIframe', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <ArticleIframe
          src="https://infographics.economist.com/2017/ukelmap-2017/"
          height={100}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
