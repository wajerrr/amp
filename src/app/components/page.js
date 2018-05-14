import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Navigation from './navigation';
import Article from './article';
import Footer from './footer';
import injectFontFace from '../styles/font-face';
import fontFamily from '../styles/font-family';
import text from '../styles/typography';
import color from '../styles/color';
import NavigationMenu from './navigation-menu';
import spacings from '../styles/spacings';

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
`;
const headerClassName = css`
  background-color: ${color.kiev};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
`;
const mainBodyClassName = css`
  top: 55px;
  position: relative;
`;

const Page = ({ data }) => (
  <div className={mainBodyClassName}>
    <header className={headerClassName}>
      <Navigation />
    </header>
    <NavigationMenu data={data.navigation} />
    <main className={mainClassName}>
      <Article data={data} />
      <div className={mainContentClassName}>
        <Article data={data} />
      </div>
    </main>
    <Footer />
  </div>
);

Page.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Page;
