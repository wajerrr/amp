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

const buildComponents = (childrenData = [], path = '') => {
  const getComponent = ({ type, name = '', data, children, attribs }, key) => {
    switch (type) {
      case 'tag':
        switch (name) {
          case 'p':
            return <p key={key}>{buildComponents(children, key)}</p>;
          case 'a':
            return (
              <a key={key} href={attribs.href} className={linkClassName}>
                {buildComponents(children, key)}
              </a>
            );
          case 'br':
            return <br key={key} />;
          case 'em':
            return <em key={key}>{buildComponents(children, key)}</em>;
          case 'span':
            return <span key={key}>{buildComponents(children, key)}</span>;
          case 'strong':
            return <strong key={key}>{buildComponents(children, key)}</strong>;
          case 'figure':
            return buildComponents(children);
          case 'iframe':
            return (
              <amp-iframe
                width={attribs.width}
                height={attribs.height}
                sandbox="allow-scripts allow-same-origin"
                layout="responsive"
                src={`https://${attribs.src}`}
              />
            );
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

export default buildComponents;
