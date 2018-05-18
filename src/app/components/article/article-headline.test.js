import React from 'react';
import renderer from 'react-test-renderer';
import ArticleHeadline from './article-headline';

describe('ArticleHeadline', () => {
  it('should match snapshot without subheadline', () => {
    const tree = renderer
      .create(<ArticleHeadline>description</ArticleHeadline>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot with subheadline', () => {
    const tree = renderer
      .create(
        <ArticleHeadline subheadline="subheadline">headlione</ArticleHeadline>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
