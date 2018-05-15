import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Navigation from './navigation';
import Article from './article';
import Footer from './footer';
import StoryCollection from './story-collection/story-collection';
import injectFontFace from '../styles/font-face';
import fontFamily from '../styles/font-family';
import text from '../styles/typography';
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

const Page = ({ data }) => (
  <div>
    <main className={mainClassName}>
      <Navigation />
      <div className={mainContentClassName}>
        <Article data={data} />
        <StoryCollection data={data.editorsPick} />
      </div>
    </main>
    <Footer />
  </div>
);

Page.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Page;
