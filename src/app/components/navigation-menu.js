/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'emotion';
import AccordionListItem from './accordion-list';
import IconButton from './icon-button';
import typography from '../styles/typography';
import color from '../styles/color';

injectGlobal`
  #sidebar {
    width: 100%;
    background-color: ${color.berlin};
    font-family: Tahoma;
    font-size: ${typography.sizeStep['1']};
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
          margin: '1em',
        }}
      />
      {navigation.hasPart.parts.map((itm) => (
        <AccordionListItem item={itm} key={itm.id} />
      ))}
    </amp-sidebar>
  );
};

NavigationMenu.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default NavigationMenu;
