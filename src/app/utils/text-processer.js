import isInlineAd, { generateAds } from '../../app/utils/adverts';

function processArticleText(text) {
  const processedText = [];
  text.forEach((textItem) =>
    processedText.push(
      /* 
        Checks if the current item is an advert and adds the config object
        for the buildArticleText function.
      */
      isInlineAd(textItem) ? { type: 'tag', name: 'inlineAd' } : textItem
    )
  );
  // Adding other adverts into the article with pre-defined logic.
  return generateAds(processedText);
}

export default processArticleText;
