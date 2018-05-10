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

injectFontFace();

const mainClassName = css`
  margin: 0 ${text.sizeStep['-4']};
  font-family: ${fontFamily.sans};
  font-size: 18px;
`;

const headerClassName = css`
  background-color: ${color.kiev};
`;

const Page = ({ data }) => (
  <div>
    <main className={mainClassName}>
      <header className={headerClassName}>
        <Navigation data={data.navigation} />
      </header>
      <Article data={data} />
    </main>
    <Footer />
  </div>
);

Page.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Page;
