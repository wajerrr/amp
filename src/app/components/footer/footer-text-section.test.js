import React from 'react';
import renderer from 'react-test-renderer';
import FooterTextSection from './footer-text-section';

describe('FooterLinksSection', () => {
  it('should match the snapshot', () => {
    const footer = renderer
      .create(
        <FooterTextSection
          menuItem={{
            id: 'Copyright',
            headline:
              'Copyright © The Economist Newspaper Limited 2018. All rights reserved.',
          }}
          sectionLevel={1}
        />
      )
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
});
