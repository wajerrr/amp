import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'emotion';
import styled from 'react-emotion';
import { LargeSubscribeButton } from '../styled-subscribe-button/styled-subscribe-button';
import color from '../../styles/color';
import StyledIconButton from '../styled-icon-button/styled-icon-button';
import StyledAccordionListItem from './styled-accordion-list';
import spacings from '../../styles/spacings';
import fontFamily from '../../styles/font-family';

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  #sidebar {
    width: 100%;
    background-color: ${color.berlin};
    & > * {
      font-family: ${fontFamily.sans};
    }
  }
`;

const StyledCloseButton = styled(StyledIconButton)`
  margin: ${spacings.l};
`;

const NavigationMenu = ({ data: { navigation }, containerId }) => (
  <amp-sidebar id="sidebar" layout="nodisplay" side="right">
    <StyledCloseButton
      onProps={`tap:${containerId}.close`}
      icon="close"
      iconColor={color.kiev}
    />
    {navigation.hasPart.parts.map((itm) => (
      <StyledAccordionListItem item={itm} key={itm.id} />
    ))}
    <LargeSubscribeButton />
  </amp-sidebar>
);

NavigationMenu.propTypes = {
  data: PropTypes.shape({}).isRequired,
  containerId: PropTypes.string.isRequired,
};

export default NavigationMenu;
