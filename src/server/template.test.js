import template, { hotReloadingScript } from './template';

const metadata = `<title>title</title><meta name="name" content="content">`;

const templateParams = {
  css: 'background: pink',
  body: '<h1>body</h1>',
  metadata,
};

describe('template', () => {
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
