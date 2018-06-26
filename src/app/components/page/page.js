import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { fontFamily, text, color, spacings, pageSizes } from '../../styles/';
import footerData from '../../../../mockFooterData.json';
import navigationData from '../../../../mockNavData.json';
import injectFontFace from '../../styles/font-face';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import StoryCollection from '../story-collection/story-collection';
import NavigationMenu from '../navigation-menu/navigation-menu';
import Analytics from '../analytics/analytics';
import UserConsent from '../user-consent/user-consent';

injectFontFace();
const StyledMain = styled('main')`
  font-family: ${fontFamily.sans};
  font-size: 18px;
  line-height: ${text.lineHeight.sansOnStep['0']};
  -webkit-font-smoothing: antialiased;
  max-width: ${pageSizes.maxPageSize};
  margin: 0 auto;
`;

const StyledMainContent = styled('div')`
  padding: ${spacings.s} ${spacings.s} ${spacings.s};
  margin: 0 auto;
  position: relative;
`;

const StyledHeader = styled('header')`
  background-color: ${color.kiev};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99999;
  max-width: ${pageSizes.maxPageSize};
  margin: 0 auto;
`;

const Page = ({ data, children }) => (
  <Fragment>
    <StyledHeader>
      <Navigation menuContainerId="sidebar" />
    </StyledHeader>
    <NavigationMenu data={navigationData} containerId="sidebar" />
    <StyledMain>
      <StyledMainContent>
        {children}
        <StoryCollection data={data.editorsPick} />
      </StyledMainContent>
    </StyledMain>
    <Footer data={footerData} />
    <Analytics data={data} />
    <UserConsent />
  </Fragment>
);

Page.propTypes = {
  data: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
