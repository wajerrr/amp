import React from 'react';
import { css } from 'emotion';
import color from '../styles/color';

const linkClassName = css`
  &,
  &:active {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${color.chicago};
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 2px solid ${color.kosice};
  }
  &:hover,
  &.visited {
    color: ${color.chicago};
    border-bottom-color: ${color.chicago};
  }
`;

const buildArticleBody = (childrenData = [], path = '') => {
  const getHTMLTag = (name, children, key) => {
    const HTMLTag = name;
    return <HTMLTag key={key}>{buildArticleBody(children, key)}</HTMLTag>;
  };
  const getComponent = ({ type, name = '', data, children, attribs }, key) => {
    switch (type) {
      case 'tag':
        switch (name) {
          case 'p':
            return <p key={key}>{buildArticleBody(children, key)}</p>;
          case 'a':
            return (
              <a key={key} href={attribs.href} className={linkClassName}>
                {buildArticleBody(children, key)}
              </a>
            );
          case 'br':
            return <br key={key} />;
          case 'figure':
            return buildArticleBody(children);
          case 'img':
            return (
              <amp-img
                key={key}
                width={attribs.width}
                height={attribs.height}
                src={attribs.src}
                layout="responsive"
              />
            );
          case 'em':
          case 'span':
          case 'strong':
            return getHTMLTag(name, children, key);
          default:
            return '';
        }
      case 'text':
        return data;
      default:
        return '';
    }
  };

  return childrenData.map((itemData, i) =>
    getComponent(itemData, `${path}-${i}`)
  );
};

export default buildArticleBody;
