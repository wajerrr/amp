/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'emotion';
import typography from '../styles/typography';
import color from '../styles/color';
import IconButton from './icon-button';
import StyledAccordionListItem from './styled-accordion-list';
import spacings from '../styles/spacings';
import fontFamily from '../styles/font-family';

injectGlobal`
  #sidebar {
    width: 100%;
    background-color: ${color.berlin};
    & > * {
      font-family: ${fontFamily.sans};
      font-size: ${typography.sizeStep['1']};
    }
  }
`;

const NavigationMenu = ({ data }) => {
  const { navigation } = data;
  return (
    <amp-sidebar id="sidebar" layout="nodisplay" side="right">
      <IconButton
        onProps="tap:sidebar.close"
        icon="closeIconKiev"
        customStyles={{
          margin: spacings.l,
        }}
      />
      {navigation.hasPart.parts.map((itm) => (
        <StyledAccordionListItem item={itm} key={itm.id} />
      ))}
    </amp-sidebar>
  );
};

NavigationMenu.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default NavigationMenu;
