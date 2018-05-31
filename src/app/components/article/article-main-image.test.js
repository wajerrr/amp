import React from 'react';
import renderer from 'react-test-renderer';
import ArticleMainImage from './article-main-image';

describe('ArticleMainImage', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <ArticleMainImage
          src="https://www.economist.com/sites/default/files/20180602_blp904.jpg"
          width={100}
          height={100}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
