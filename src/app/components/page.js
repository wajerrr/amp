import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Navigation from './navigation';
import Article from './article';
import Footer from './footer';
import StoryCollection from './story-collection/story-collection';
import injectFontFace from '../styles/font-face';
import fontFamily from '../styles/font-family';
import text from '../styles/typography';
import color from '../styles/color';
import NavigationMenu from './navigation-menu';
import spacings from '../styles/spacings';
import footerData from '../../../mockFooterData.json';
import navigationData from '../../../mockNavData.json';

injectFontFace();

const mainClassName = css`
  font-family: ${fontFamily.sans};
  font-size: 18px;
  line-height: ${text.lineHeight.sansOnStep['0']};
  -webkit-font-smoothing: antialiased;
`;
const mainContentClassName = css`
  padding: ${spacings.s} ${spacings.s} ${spacings.s};
  margin: 0 auto;
  position: relative;
`;
const headerClassName = css`
  background-color: ${color.kiev};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99999;
`;

const Page = ({ data }) => (
  <Fragment>
    <header className={headerClassName}>
      <Navigation menuContainerId="sidebar" />
    </header>
    <NavigationMenu data={navigationData} containerId="sidebar" />
    <main className={mainClassName}>
      <div className={mainContentClassName}>
        <Article data={data} />
        <StoryCollection data={data.editorsPick} />
      </div>
    </main>
    <Footer data={footerData} />
  </Fragment>
);

Page.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Page;
