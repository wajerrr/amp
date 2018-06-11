export const sanitizeText = (text) =>
  (text || '').replace(/\\([\s\S])|(")/g, '&quot;');

export const getCanonicalLinkTag = (url) =>
  `<link rel="canonical" href="${url}">`;

const getImageSrc = (image) => {
  if (image) {
    if (image.promo && image.promo.url) {
      return image.promo.url.canonical;
    } else if (image.main && image.main.url) {
      return image.main.url.canonical;
    }
  }
  return null;
};

export const getStructuredData = ({
  type,
  url,
  headline,
  datePublished,
  dateModified,
  imgSrc,
  author = ['The Economist'],
}) => {
  const data = {
    '@context': 'http://schema.org',
    '@type': type,
    url,
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'The Economist',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.economist.com/assets/the-economist-logo.png',
      },
    },
    headline,
    mainEntityOfPage: url,
    datePublished,
    dateModified,
    image: imgSrc,
    author,
  };

  return `<script type="application/ld+json">
   ${JSON.stringify(data)}
  </script>`;
};

export const getImgMetaTags = (imgSrc) =>
  imgSrc
    ? `<meta  name="twitter:image" content="${imgSrc}">
      <meta  property="og:image" content="${imgSrc}">`
    : '';

const getMetadata = ({
  headline,
  description,
  subheadline,
  url,
  datePublished,
  isAccessibleForFree,
  image,
  type,
  dateModified,
  author,
}) => {
  const sanitizedHeadline = sanitizeText(headline);
  const sanitizedDescription = sanitizeText(description);
  const sanitizedSubheadline = sanitizeText(subheadline);
  const canonicalUrl = url.canonical;

  const imgSrc = getImageSrc(image);

  return `<title>${
    sanitizedSubheadline
      ? `${sanitizedHeadline} - ${sanitizedSubheadline}`
      : sanitizedHeadline
  }</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <meta  property="article:publisher" content="https://www.facebook.com/theeconomist">
      <link rel="publisher" href="https://plus.google.com/100470681032489535736">
      ${getCanonicalLinkTag(canonicalUrl)}
      <meta  property="og:site_name" content="The Economist">
      <meta  property="og:title" content="${sanitizedHeadline}">
      <meta  name="The Economist" content="app-id=896628003, app-argument=${canonicalUrl}">
      <meta  property="al:ipad:url" content="${canonicalUrl}">
      <meta  property="al:ipad:app_store_id" content="896628003">
      <meta  property="al:ipad:app_name" content="The Economist">
      <meta  property="al:iphone:url" content="${canonicalUrl}">
      <meta  property="al:iphone:app_name" content="The Economist">
      <meta  property="al:iphone:app_store_id" content="896628003">
      <meta  property="al:ios:url" content="${canonicalUrl}">
      <meta  property="al:ios:app_name" content="The Economist">
      <meta  property="al:ios:app_store_id" content="896628003">
      <meta  name="twitter:site" content="@TheEconomist">
      <meta  name="twitter:description" content="${sanitizedDescription}">
      <meta  property="article:content_tier" content="${
        isAccessibleForFree ? 'free' : 'metered'
      }">
      <meta  property="og:url" content="${canonicalUrl}">
      <meta  property="og:type" content="article">
      <meta  property="og:description" content="${sanitizedDescription}">
      <meta  name="pubdate" content="${new Date(datePublished)}">
      <meta  name="description" content="${sanitizedDescription}">
      <meta  name="twitter:card" content="summary_large_image"> 
      ${getImgMetaTags(imgSrc)}
      ${getStructuredData({
        type,
        url: canonicalUrl,
        headline: sanitizedHeadline,
        datePublished,
        dateModified,
        imgSrc,
        author: author && author.length > 0 ? author : undefined,
      })}`;
};

/* 
This one below is missing it trips up amp validation
line 35, col 6: The attribute 'name' in tag 'meta name= and content=' is set to the invalid value 'revisit-after'.

<meta name="revisit-after" content="1 days"> //MISSING
*/

export default getMetadata;
