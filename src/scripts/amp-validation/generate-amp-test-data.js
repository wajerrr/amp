/*  eslint-disable no-await-in-loop, no-console */
import fs from 'fs';
import path from 'path';

import getGraphqlData from '../../server/graphql/get-data';

import config from './config';

const generateAmpTestData = async (articlesList = config.data) => {
  for (let i = 0; i < articlesList.length; i += 1) {
    console.info(`GETTING data for article ${i}`);
    try {
      const testData = await getGraphqlData(`${config.host}${articlesList[i]}`);
      const filename = `${path.resolve(
        __dirname,
        config.DATA_FOLDER
      )}/${i}.json`;

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
