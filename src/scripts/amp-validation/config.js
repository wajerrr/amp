import avalibleArticles from '../../server/config/available-articles';

export default {
  data: [...avalibleArticles],
  host: 'https://www.economist.com/',
  DATA_FOLDER: 'test-data',
};
