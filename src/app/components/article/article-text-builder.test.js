import renderer from 'react-test-renderer';
import buildArticleText from './article-text-builder';

describe('buildComponents', () => {
  it('should match snapshot for tag a', () => {
    const tree = renderer
      .create(
        buildArticleText([
          {
            type: 'tag',
            name: 'a',
            attribs: {
              href: 'https://www.economist.com/',
            },
            children: [
              {
                data: 'Chain reaction',
                type: 'text',
              },
            ],
          },
        ])
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot for image', () => {
    const tree = renderer
      .create(
        buildArticleText([
          {
            type: 'tag',
            name: 'figure',
            attribs: {
              itemtype: 'https://schema.org/ImageObject',
            },
            children: [
              {
                type: 'tag',
                name: 'img',
                attribs: {
                  src:
                    'src="https://www.economist.com/sites/default/files/20180602_blp904.jpg"',
                  width: 1280,
                  height: 720,
                  alt: '',
                },
                children: [],
              },
            ],
          },
        ])
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot for iframe', () => {
    const tree = renderer
      .create(
        buildArticleText([
          {
            type: 'tag',
            name: 'figure',
            attribs: {
              itemtype: 'https://schema.org/MediaObject',
              class: 'op-interactive',
            },
            children: [
              {
                type: 'tag',
                name: 'iframe',
                attribs: {
                  height: '630',
                  src: '//infographics.economist.com/2017/ukelmap-2017/',
                  width: '640',
                },
                children: [],
              },
            ],
          },
        ])
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot for br', () => {
    const tree = renderer
      .create(
        buildArticleText([
          {
            type: 'tag',
            name: 'br',
            attribs: {},
            children: [],
          },
        ])
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
