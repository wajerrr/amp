import getMetadata, {
  getCanonicalLinkTag,
  getImgMetaTags,
} from './get-metadata';

const main = {
  url: {
    canonical: 'urlmain',
  },
};
const promo = {
  url: {
    canonical: 'urlpromo',
  },
};

const articleData = {
  headline: 'headline',
  description: 'description',
  subheadline: 'subheadline',
  url: { canonical: 'https://url' },
  datePublished: '2018-04-10T13:25:15Z',
  isAccessibleForFree: true,
  image: { main, promo },
};
const expected = `<title>headline - subheadline</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <meta  property="article:publisher" content="https://www.facebook.com/theeconomist">
      <link rel="publisher" href="https://plus.google.com/100470681032489535736">
      <link rel="canonical" href="https://url">
      <meta  property="og:site_name" content="The Economist">
      <meta  property="og:title" content="headline">
      <meta  name="The Economist" content="app-id=896628003, app-argument=https://url">
      <meta  property="al:ipad:url" content="https://url">
      <meta  property="al:ipad:app_store_id" content="896628003">
      <meta  property="al:ipad:app_name" content="The Economist">
      <meta  property="al:iphone:url" content="https://url">
      <meta  property="al:iphone:app_name" content="The Economist">
      <meta  property="al:iphone:app_store_id" content="896628003">
      <meta  property="al:ios:url" content="https://url">
      <meta  property="al:ios:app_name" content="The Economist">
      <meta  property="al:ios:app_store_id" content="896628003">
      <meta  name="twitter:site" content="@TheEconomist">
      <meta  name="twitter:description" content="description">
      <meta  property="article:content_tier" content="free">
      <meta  property="og:url" content="https://url">
      <meta  property="og:type" content="article">
      <meta  property="og:description" content="description">
      <meta  name="pubdate" content="${new Date(articleData.datePublished)}">
      <meta  name="description" content="description">
      <meta  name="twitter:card" content="summary_large_image"> 
      <meta  name="twitter:image" content="urlpromo">
      <meta  property="og:image" content="urlpromo">`;

describe('getMetdatda', () => {
  it('should render correct metadata', () => {
    const actual = getMetadata(articleData);
    expect(actual).toEqual(expected);
  });
  it('should render title withous subheadline', () => {
    const actual = getMetadata({ ...articleData, subheadline: undefined });
    expect(actual.includes('<title>headline</title>')).toEqual(true);
  });

  it('shoul render correct canonical link tag', () => {
    const actual = getMetadata(articleData);
    expect(
      actual.includes(getCanonicalLinkTag(articleData.url.canonical))
    ).toEqual(true);
  });

  it('should render correct article:content_tier meta tag', () => {
    const actual = getMetadata({ ...articleData, isAccessibleForFree: false });
    expect(
      actual.includes(
        '<meta  property="article:content_tier" content="metered">'
      )
    ).toEqual(true);
  });

  it('should not render image related tags when there is no image', () => {
    const actual = getMetadata({ ...articleData, image: undefined });

    expect(actual.includes(getImgMetaTags(null))).toEqual(true);
  });

  it('should render main image related tags when there is no promo image', () => {
    const actual = getMetadata({ ...articleData, image: { main } });

    expect(
      actual.includes(getImgMetaTags(articleData.image.main.url.canonical))
    ).toEqual(true);
  });

  it('should replace double quotes with &quot;', () => {
    const actual = getMetadata({
      ...articleData,
      headline: '"headline"',
      description: '"article description"',
      subheadline: '"subheadline"',
    });

    expect(actual.includes('"headline"')).toEqual(false);
    expect(actual.includes('"article description"')).toEqual(false);
    expect(actual.includes('"subheadline"')).toEqual(false);

    expect(actual.match(/&quot;headline&quot;/gi).length).toEqual(2);
    expect(actual.match(/&quot;article description&quot;/gi).length).toEqual(3);
    expect(actual.match(/&quot;subheadline&quot;/gi).length).toEqual(1);
  });
});
