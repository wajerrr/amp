import processArticleText from './text-processer';

describe('processArticleText', () => {
  const articleContent = [
    {
      type: 'tag',
      name: 'p',
      attribs: {},
      children: [
        {
          data: 'paragraph1',
          type: 'text',
        },
      ],
    },
    {
      type: 'tag',
      name: 'p',
      attribs: {},
      children: [
        {
          data: 'paragraph2',
          type: 'text',
        },
      ],
    },
    {
      type: 'tag',
      name: 'p',
      attribs: {},
      children: [
        {
          data: 'paragraph3',
          type: 'text',
        },
      ],
    },
  ];
  const advert = {
    type: 'tag',
    name: 'figure',
    attribs: {
      role: 'presentation',
      itemtype: 'https://schema.org/WPAdBlock',
    },
    children: [],
  };
  it('should return the text if there are no inline ads', () => {
    const processedText = processArticleText(articleContent);
    expect(processedText).not.toContain({ type: 'tag', name: 'inlineAd' });
  });
  it('should add an advert object if it finds an inline ad', () => {
    articleContent.push(advert);
    const processedText = processArticleText(articleContent);
    expect(processedText).toContainEqual({ name: 'inlineAd', type: 'tag' });
  });
});
