import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';
import footerContent from '../../../../mockFooterData.json';

describe('Footer', () => {
  it('should match the snapshot', () => {
    const footer = renderer.create(<Footer data={footerContent} />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
