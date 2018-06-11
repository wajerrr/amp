const mediumArticleThreshold = 4;
const isShortArticle = (articleLength) =>
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
  text.includes((item) => isInlineAd(item.attribs));

export function generateAds(articleText) {
  // If the length of the article is below 4 paragraphs then no adverts are added.
  if (isShortArticle(articleText.length) || !articleText) {
    return articleText;
  }
  const articleContent = Array.from(articleText);
  const inlineAdsPresent = containsInlineAd(articleContent);
  // If no inlineAds are found already in the article content from the MT then an advert is added half way through the article.
  if (!inlineAdsPresent) {
    articleContent.splice(Math.floor(articleContent.length / 2), 0, {
      type: 'tag',
      name: 'inlineAd',
    });
  }
  // An advert is always added at the end of an article, unless it is a short article.
  articleContent.push({ type: 'tag', name: 'inlineAd' });
  return articleContent;
}
