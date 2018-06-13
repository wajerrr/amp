import { Helmet } from 'react-helmet';

import template, { hotReloadingScript } from './template';

const metadata = `<title>title</title><meta name="name" content="content">`;

const mockHelmetInstance = { script: { toString: jest.fn() } };
jest.mock('react-helmet', () => ({
  Helmet: {
    renderStatic: jest.fn().mockImplementation(() => mockHelmetInstance),
  },
}));

const templateParams = {
  css: 'background: pink',
  body: '<h1>body</h1>',
  metadata,
};

describe('template', () => {
  beforeEach(() => {
    Helmet.renderStatic.mockClear();
    mockHelmetInstance.script.toString.mockClear();
  });

  test('calls helmet methods', () => {
    template(templateParams);
    expect(Helmet.renderStatic).toHaveBeenCalledTimes(1);
    expect(mockHelmetInstance.script.toString).toHaveBeenCalledTimes(1);
  });

  test('populates metadata', () => {
    expect(template(templateParams).includes(metadata)).toEqual(true);
  });

  test('populates css style', () => {
    expect(
      template(templateParams).includes(
        `<style amp-custom>${templateParams.css}</style>`
      )
    ).toEqual(true);
  });

  test('populates body', () => {
    expect(
      template(templateParams).includes(`<body>${templateParams.body}</body>`)
    ).toEqual(true);
  });

  test('does not add hot reloading script when isDev flag is false', () => {
    expect(template(templateParams).includes(hotReloadingScript)).toEqual(
      false
    );
  });

  test('does add hot reloading script when isDev flag is true', () => {
    expect(
      template({ ...templateParams, isDev: true }).includes(hotReloadingScript)
    ).toEqual(true);
  });
});
