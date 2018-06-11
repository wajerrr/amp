/* eslint-disable no-unused-expressions */
import isInlineAd, { generateAds } from './adverts';

describe('Adverts', () => {
  describe('isInlineAd', () => {
    const nonAd = {
      type: 'tag',
      name: 'figure',
      attribs: {
        itemtype: 'https://schema.org/ImageObject',
      },
      children: [],
    };
    const ad = {
      type: 'tag',
      name: 'figure',
      attribs: {
        role: 'presentation',
        itemtype: 'https://schema.org/WPAdBlock',
      },
      children: [],
    };
    it('should return true of contentItem is an ad', () => {
      expect(isInlineAd(ad)).toBeTruthy;
    });
    it('should return false of contentItem is not an ad', () => {
      expect(isInlineAd(nonAd)).toBeFalsy;
    });
  });

  describe('generateAds', () => {
    const shortArticleWithNoInlineAds = [
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
    ];
    const mediumArticleWithNoInlineAds = [
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
      {
        type: 'tag',
        name: 'p',
        attribs: {},
        children: [
          {
            data: 'paragraph4',
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
            data: 'paragraph5',
            type: 'text',
          },
        ],
      },
    ];
    const mediumArticleWithInlineAd = [
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
      {
        type: 'tag',
        name: 'figure',
        attribs: {
          role: 'presentation',
          itemtype: 'https://schema.org/WPAdBlock',
        },
        children: [],
      },
      {
        type: 'tag',
        name: 'p',
        attribs: {},
        children: [
          {
            data: 'paragraph4',
            type: 'text',
          },
        ],
      },
    ];
    const expectedAd = { type: 'tag', name: 'inlineAd' };
    it('should not render any adverts for a short article', () => {
      const articleContent = generateAds(shortArticleWithNoInlineAds);
      expect(articleContent).not.toContain(expectedAd);
    });
    it('should render an advert at the end of medium articles if they have an inline ad', () => {
      const articleContent = generateAds(mediumArticleWithInlineAd);
      const lastItemInArray = articleContent[articleContent.length - 1];
      expect(lastItemInArray).toEqual(expectedAd);
    });
    it('should render an advert in the middle and at the end of medium articles if there are no inline ads', () => {
      const articleContent = generateAds(mediumArticleWithNoInlineAds);
      const lastItemInArray = articleContent[articleContent.length - 1];
      expect(lastItemInArray).toEqual(expectedAd);
      const middleAd =
        articleContent[Math.floor(articleContent.length / 2) - 1];
      expect(middleAd).toEqual(expectedAd);
    });
  });
});
