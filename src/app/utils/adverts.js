const mediumArticleThreshold = 4;
export const isShortArticle = (articleLength) =>
  articleLength <= mediumArticleThreshold;

function isInlineAd(contentItem) {
  if (!contentItem) {
    return false;
  }
  const { role, itemtype } = contentItem.attribs;
  return (
    // eslint-disable-next-line
    (role && role === 'presentation') && (itemtype && itemtype.includes('WPAdBlock'))
  );
}

export default isInlineAd;

const containsInlineAd = (text) =>
  text.some((item) => item.type === 'inlineAd');

export function generateAds(articleText = [], ad) {
  const advert = {
    type: 'inlineAd',
    attribs: { ad },
  };
  // Convert graphgql object to consumable object for buildArticleText
  const text = articleText.map(
    (textItem) => (isInlineAd(textItem) ? advert : textItem)
  );
  if (isShortArticle(text.length)) {
    return text;
  }
  const adIndex = Math.floor(text.length / 2);
  const articleContent = [
    ...text.slice(0, adIndex),
    containsInlineAd(text) ? null : advert,
    ...text.slice(adIndex),
  ];
  return articleContent;
}
