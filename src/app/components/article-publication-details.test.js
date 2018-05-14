import React from 'react';
import renderer from 'react-test-renderer';
import ArticlePublicationDetails from './article-publication-details';

describe('ArticlePublicationDetails', () => {
  it('should match snapshot with byline', () => {
    const tree = renderer
      .create(
        <ArticlePublicationDetails
          datePublished="2018-05-08T18:24:40Z"
          byline="me"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot without byline', () => {
    const tree = renderer
      .create(
        <ArticlePublicationDetails datePublished="2018-05-08T18:24:40Z" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
