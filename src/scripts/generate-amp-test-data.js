/*  eslint-disable no-await-in-loop, no-console */
import fs from 'fs';
import path from 'path';

import getGraphqlData from '../server/get-graphql-data';

require('babel-register')({
  presets: ['es2015', 'react'],
});

const data = [
  'news/world-week/21741222-politics-week',
  'news/asia/21741807-thirteen-staff-quit-after-editor-dismissed-new-owner-cows-cambodias-last-independent-daily',
  'news/leaders/21741549-windrush-scandal-was-caused-lack-simple-way-perform-migration-checks-britain',
];

const host = 'https://www.economist.com/';
const DATA_FOLDER = 'amp-test-data';

const generateAmpTestData = async (articlesList = data) => {
  for (let i = 0; i < articlesList.length; i += 1) {
    console.info(`GETTING data for article ${i}`);
    try {
      const testData = await getGraphqlData(`${host}${articlesList[i]}`);
      const filename = `${path.resolve(__dirname, DATA_FOLDER)}/${i}.json`;

      fs.writeFileSync(filename, JSON.stringify(testData));
      console.info(`Saved test data to ${filename}`);
      console.info(`DONE for article ${i}`);
    } catch (error) {
      console.log('error', error);
      process.exit(1);
    }
  }
};

export default generateAmpTestData;
