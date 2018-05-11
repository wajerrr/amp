import React from 'react';
import { css } from 'emotion';
import spacings from '../styles/spacings';
import color from '../styles/color';
import ShareBar from './share-bar';

const className = css`
  display: flex;
  align-items: center;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${color.cardiff};
  padding: ${spacings.s} 0;

  amp-social-share,
  .comments-link {
    background-color: ${color.kiev};
    box-sizing: border-box;
    width: 31px;
    height: 31px;
    border-radius: 9999999px;
    fill: #fff;
    background-image: none;
    margin: 0 ${spacings.l} 0 0;
  }

  .comments-link {
    margin-left: auto;
    background-color: ${color.chicago};
    margin-right: 0;
  }
`;

const StyledShareBar = (props) => <ShareBar {...props} className={className} />;

export default StyledShareBar;
