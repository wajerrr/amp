import React from 'react';
import StyledLink from '../styled-link/styled-link';
import StyledBlockquote from '../styled-block-quote/styled-block-quote';
import Image from '../image/image';

const buildArticleText = (childrenData = [], path = '') => {
  const getHTMLTag = (name, children, key) => {
    const HTMLTag = name;
    return <HTMLTag key={key}>{buildArticleText(children, key)}</HTMLTag>;
  };
  const getComponent = (
    { type, name = '', data, children, attribs = {} },
    key
  ) => {
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
              <Image
                key={key}
                width={parseInt(attribs.width, 0)}
                height={parseInt(attribs.height, 0)}
                src={attribs.src}
                layout="responsive"
              />
            );
          case 'br':
            return <br key={key} />;
          case 'blockquote':
            return (
              <StyledBlockquote key={key}>
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
