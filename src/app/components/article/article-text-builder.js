import React from 'react';
import styled from 'react-emotion';
import StyledLink from '../styled-link/styled-link';
import { color, fontFamily, text, grid } from '../../styles';

const StyledBlockquote = styled('blockquote')`
  display: flex;
  color: ${color.kiev};
  margin: 0 ${grid.gutter.xl} 0 0;
  font-family: ${fontFamily.sans};
  font-size: ${text.sizeStep['1']};
  font-weight: bold;
  line-height: ${text.lineHeight.basic};

  &:before {
    content: '“';
    display: block;
    position: relative;
    top: 6px;
    width: ${grid.gutter.l};
    padding-right: calc(${grid.spacing.mouse} * 1.5);
    color: ${color.economist};
    font-family: ${fontFamily.serif};
    font-size: ${text.sizeStep['7']};
  }
`;

const buildArticleText = (childrenData = [], path = '') => {
  const getHTMLTag = (name, children, key) => {
    const HTMLTag = name;
    return <HTMLTag key={key}>{buildArticleText(children, key)}</HTMLTag>;
  };
  const getComponent = ({ type, name = '', data, children, attribs }, key) => {
    switch (type) {
      case 'tag':
        switch (name) {
          case 'a':
            return (
              <StyledLink key={key} href={attribs.href}>
                {buildArticleText(children, key)}
              </StyledLink>
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
          case 'br':
            return <br key={key} />;
          case 'blockquote':
            return (
              <StyledBlockquote>
                {buildArticleText(children, key)}
              </StyledBlockquote>
            );
          case 'iframe':
            return '';
          default:
            return getHTMLTag(name, children, key);
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

export default buildArticleText;
