import React from 'react';

const buildComponents = (childrenData = [], path = '') => {
  const getComponent = ({ type, name = '', data, children, attribs }, key) => {
    switch (type) {
      case 'tag':
        switch (name) {
          case 'p':
            return <p key={key}>{buildComponents(children, key)}</p>;
          case 'em':
            return <em key={key}>{buildComponents(children, key)}</em>;
          case 'strong':
            return <strong key={key}>{data}</strong>;
          case 'figure':
            return buildComponents(children);
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
