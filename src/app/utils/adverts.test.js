/* eslint-disable no-unused-expressions */
import isInlineAd, { generateAds } from './adverts';

const generateArticleText = (length) => {
  const paragraph = {
    type: 'tag',
    name: 'p',
    attribs: {},
    children: [],
  };
  const arr = new Array(length);
  return arr.fill(paragraph, 0, length);
};
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
    const ad = {
      type: 'tag',
      name: 'figure',
      attribs: {
        role: 'presentation',
        itemtype: 'https://schema.org/WPAdBlock',
      },
      children: [],
    };
    const expectedAd = { type: 'inlineAd', attribs: { ad } };
    it('should not render any adverts for a short article', () => {
      const articleContent = generateAds(generateArticleText(4), ad);
      expect(articleContent).not.toContain(expectedAd);
    });
    it('should render an advert in the middle of medium articles if there are no inline ads for odd number of paragraphs', () => {
      const articleContent = generateAds(generateArticleText(5), ad);
      expect(articleContent.length).toEqual(6);
      const middleAd = articleContent[2];
      expect(middleAd).toEqual(expectedAd);
    });
    it('should render an advert in the middle of medium articles if there are no inline ads for even number of paragraphs', () => {
      const articleContent = generateAds(generateArticleText(6), ad);
      expect(articleContent.length).toEqual(7);
      const middleAd = articleContent[3];
      expect(middleAd).toEqual(expectedAd);
    });
  });
});
