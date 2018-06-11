import React from 'react';
import renderer from 'react-test-renderer';
import Analytics from './analytics';

/* eslint-disable no-underscore-dangle */
const extractConfigData = (node) =>
  JSON.parse(node.children[0].props.dangerouslySetInnerHTML.__html);

/* eslint-disable no-template-curly-in-string */
describe('Analytics', () => {
  it('should match the snapshot', () => {
    const analytics = renderer
      .create(
        <Analytics
          data={{
            article: {
              headline: 'content headline',
              publication: [{ headline: 'publication headline' }],
              print: null,
              tegType: 'mtblog',
              datePublished: '2018-04-16T07:01:00Z',
            },
          }}
        />
      )
      .toJSON();
    expect(analytics).toMatchSnapshot();
  });
  describe('Content type: blog', () => {
    const responseMockBlog = {
      article: {
        headline: 'content headline',
        publication: [{ headline: 'publication headline' }],
        print: null,
        tegType: 'mtblog',
        datePublished: '2018-04-16T07:01:00Z',
      },
    };
    describe('should generate property in vars', () => {
      it('pageName', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).vars.pageName).toEqual(
          'blog_post|publication_headline|content_headline'
        );
      });
    });
    describe('should generate property in extraUrlParams', () => {
      it('section', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.subsection).toEqual(
          'publication_headline'
        );
      });
      it('prop1', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop1).toEqual(
          'blogs_publication_headline'
        );
      });
      it('prop4', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop4).toEqual(
          'blog_post'
        );
      });
      it('prop5', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop5).toEqual(
          'blog|content_headline'
        );
      });
      it('prop31', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop31).toEqual(
          '2018|04|16'
        );
      });
      it('prop32', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop32).toEqual(
          '${ampdocUrl}'
        );
      });
    });
  });
  describe('Content type: article', () => {
    const responseMockBlog = {
      article: {
        headline: 'content headline',
        print: { section: { headline: 'section headline' } },
        publication: [{ headline: 'publication headline' }],
        tegType: 'article',
        datePublished: '2018-04-16T07:01:00Z',
      },
    };
    describe('should generate property in vars', () => {
      it('pageName', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).vars.pageName).toEqual(
          'section_headline|article|section_headline|content_headline'
        );
      });
    });
    describe('should generate property in extraUrlParams', () => {
      it('section', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.subsection).toEqual(
          'section_headline'
        );
      });
      it('prop1', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop1).toEqual(
          'section_headline'
        );
        expect(extractConfigData(analytics).extraUrlParams.eVar1).toEqual(
          'section_headline'
        );
      });
      it('prop4', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop4).toEqual(
          'article'
        );
        expect(extractConfigData(analytics).extraUrlParams.eVar4).toEqual(
          'article'
        );
      });
      it('prop5', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop5).toEqual(
          'content_headline'
        );
        expect(extractConfigData(analytics).extraUrlParams.eVar5).toEqual(
          'content_headline'
        );
      });
      it('prop31', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop31).toEqual(
          '2018|04|16'
        );
        expect(extractConfigData(analytics).extraUrlParams.eVar31).toEqual(
          '2018|04|16'
        );
      });
      it('prop32', () => {
        const analytics = renderer
          .create(<Analytics data={responseMockBlog} />)
          .toJSON();
        expect(extractConfigData(analytics).extraUrlParams.prop32).toEqual(
          '${ampdocUrl}'
        );
        expect(extractConfigData(analytics).extraUrlParams.eVar32).toEqual(
          '${ampdocUrl}'
        );
      });
    });
  });
});
