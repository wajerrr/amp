import baseConfig from '../server/config/economist';

const defaultServicePath = '/sites/default/files/imagecache/';

const getSrcset = (
  imgURL,
  baseUrl = baseConfig.domain,
  servicePath = defaultServicePath
) => {
  const imgId = imgURL.split(baseUrl)[1];
  return `https://${baseUrl}${servicePath}200-width${imgId}.jpg 200w,
https://${baseUrl}${servicePath}300-width${imgId} 300w,
https://${baseUrl}${servicePath}400-width${imgId} 400w,
https://${baseUrl}${servicePath}640-width${imgId} 640w,
https://${baseUrl}${servicePath}800-width${imgId} 800w,
https://${baseUrl}${servicePath}1000-width${imgId} 1000w,
https://${baseUrl}${servicePath}1200-width${imgId} 1200w,
https://${baseUrl}${servicePath}1280-width${imgId} 1280w,
https://${baseUrl}${servicePath}1600-width${imgId} 1600w`;
};

export const fullWidthSize = `(max-width: 640px) 100vw, 640px`;
export const halfWidthSize = `(max-width: 640px) 50vw, 320px`;

export default getSrcset;
