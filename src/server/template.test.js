import template, { hotReloadingScript } from './template';

const templateParams = {
  title: 'dummy title',
  canonicalUrl: 'https://stickyfloors.net',
  css: 'background: pink',
  body: '<h1>body</h1>',
};

describe('template', () => {
  test('populates title tag', () => {
    expect(
      template(templateParams).includes(
        `<title>${templateParams.title}</title>`
      )
    ).toEqual(true);
  });

  test('populates canonicalUrl', () => {
    expect(
      template(templateParams).includes(
        `<link rel="canonical" href="${templateParams.canonicalUrl}">`
      )
    ).toEqual(true);
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
