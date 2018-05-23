/*  eslint-disable no-console, import/no-extraneous-dependencies */

import fs from 'fs';
import path from 'path';
import amphtmlValidator from 'amphtml-validator';

import config from './config';
import renderHtml from '../../server/render-html';

const displayValidationResult = (validationResult, ampHtmlString, url) => {
  (validationResult.status === 'PASS' ? console.log : console.error)(
    `${validationResult.status} : ${url}`
  );
  if (validationResult.errors.length > 0)
    console.error(`


    ------------------------- Copy & Paste html below to https://validator.ampproject.org/ for details ------------------
  
    ${ampHtmlString}

  ------------------------------------------------------------------------------------------------------------------------
  
  `);
  validationResult.errors.forEach((error) => {
    let msg = `line ${error.line}, col ${error.col}: ${error.message}`;
    if (error.specUrl !== null) {
      msg += ` (see ${error.specUrl})`;
    }
    (error.severity === 'ERROR' ? console.error : console.warn)(msg);
  });
};

const validate = async () => {
  console.info('AMP Validation....');
  try {
    const validator = await amphtmlValidator.getInstance();
    const dataFolder = `${path.resolve(__dirname, config.DATA_FOLDER)}`;
    let errors = 0;
    const testFiles = fs
      .readdirSync(dataFolder)
      .map((file) => `${dataFolder}/${file}`)
      .filter((file) => fs.lstatSync(file).isFile() && file.includes('.json'));
    for (let i = 0; i < testFiles.length; i += 1) {
      const res = JSON.parse(fs.readFileSync(testFiles[i], 'utf8'));
      const ampHtmlString = renderHtml(
        res.data,
        res.data.article.url.canonical
      );
      const validationResult = validator.validateString(ampHtmlString);
      displayValidationResult(
        validationResult,
        ampHtmlString,
        res.data.article.url.canonical
      );
      errors += validationResult.errors.length;
    }
    return errors > 0 ? process.exit(1) : process.exit(0);
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

export default validate;
