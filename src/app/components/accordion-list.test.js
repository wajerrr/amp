import React from 'react';
import renderer from 'react-test-renderer';
import AccordionListItem from './accordion-list';
import * as navigationData from '../../../mockNavData.json';

describe('AccordionListItem', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<AccordionListItem item={navigationData.navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot with subscribeButton', () => {
    const tree = renderer
      .create(<AccordionListItem item={{ headline: 'Subscribe' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot with normal link', () => {
    const tree = renderer
      .create(<AccordionListItem item={{ headline: 'Link' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
