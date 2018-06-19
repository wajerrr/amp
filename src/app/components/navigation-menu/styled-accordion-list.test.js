import React from 'react';
import renderer from 'react-test-renderer';
import StyledAccordionListItem from './styled-accordion-list';
import navigationData from '../../../../mockNavData.json';

describe('StyledAccordionListItem', () => {
  navigationData.navigation.url = {
    canonical: 'tester',
  };
  const testListItem = navigationData.navigation.hasPart.parts[0];
  it('should match snapshot', () => {
    const tree = renderer
      .create(<StyledAccordionListItem item={testListItem} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
