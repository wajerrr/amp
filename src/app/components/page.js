import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Navigation from './navigation';
import Article from './article';
import Footer from './footer';

const mainClassName = css`
  margin: 0 10px;
`;

const Page = ({ data }) => (
  <div>
    <main className={mainClassName}>
      <Navigation />
      <Article data={data} />
    </main>
    <Footer />
  </div>
);

Page.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Page;
