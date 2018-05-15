import React from 'react';
import renderer from 'react-test-renderer';
import StyledAccordionListItem from './styled-accordion-list';
import * as navigationData from '../../../mockNavData.json';

describe('StyledAccordionListItem', () => {
  navigationData.navigation.url = {
    canonical: 'tester',
  };
  it('should match snapshot', () => {
    const tree = renderer
      .create(<StyledAccordionListItem item={navigationData.navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot with subscribeButton', () => {
    const tree = renderer
      .create(<StyledAccordionListItem item={{ headline: 'Subscribe' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot with normal link', () => {
    const tree = renderer
      .create(<StyledAccordionListItem item={{ headline: 'Link' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
