import React from 'react';
import renderer from 'react-test-renderer';
import ArticleDescription from './article-description';

describe('ArticleDescription', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<ArticleDescription>description</ArticleDescription>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
