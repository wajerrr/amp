import React from 'react';
import renderer from 'react-test-renderer';
import ArticleAboutEconomistLink from './article-about-economist-link';

describe('ArticleAboutEconomistLink', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<ArticleAboutEconomistLink />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
