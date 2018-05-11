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

injectFontFace();

const mainClassName = css`
  margin: 0 ${text.sizeStep['-4']};
  font-family: ${fontFamily.sans};
  font-size: 18px;
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
    </main>
    <Footer />
  </div>
);

Page.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Page;
