import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'react-emotion';
import { css } from 'emotion';
import IconTwitter from '@economist/component-icon/lib/inline-icons/twitter';
import IconFacebook from '@economist/component-icon/lib/inline-icons/facebook';
import IconLinkedin from '@economist/component-icon/lib/inline-icons/linkedin';
import IconMail from '@economist/component-icon/lib/inline-icons/mail';
import IconBalloon from '@economist/component-icon/lib/inline-icons/balloon';
import iconSizes from '../../styles/icon-sizes';
import spacings from '../../styles/spacings';
import color from '../../styles/color';

const StyledSocialShare = css`
  background: ${color.kiev};
  box-sizing: border-box;
  width: ${iconSizes.normal}px;
  height: ${iconSizes.normal}px;
  border-radius: 9999999px;
  fill: ${color.thimphu};
  margin: 0 ${spacings.l} 0 0;
`;

const ShareBarContainer = styled('div')`
  display: flex;
  align-items: center;
  border-top: 1px solid ${color.cardiff};
  margin-top: ${spacings.s};
  padding-top: ${spacings.s};
  amp-social-share {
    ${StyledSocialShare};
  }
`;

const CommentsLink = styled('a')`
  ${StyledSocialShare};
  margin-left: auto;
  background-color: ${color.chicago};
  margin-right: 0;
`;

const StyledShareBar = ({ commentsUri, className }) => (
  <ShareBarContainer className={className}>
    <Helmet>
      <script
        async={undefined}
        custom-element="amp-social-share"
        src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
      />
    </Helmet>
    <amp-social-share
      type="twitter"
      width={iconSizes.normal}
      height={iconSizes.normal}
      aria-label="Share on Twitter"
    >
      <IconTwitter />
    </amp-social-share>
    <amp-social-share
      type="facebook"
      width={iconSizes.normal}
      height={iconSizes.normal}
      data-param-app_id="966242223397117"
      aria-label="Share on Facebook"
    >
      <IconFacebook />
    </amp-social-share>
    <amp-social-share
      type="linkedin"
      width={iconSizes.normal}
      height={iconSizes.normal}
      aria-label="Share on LinkedIn"
    >
      <IconLinkedin />
    </amp-social-share>
    <amp-social-share
      type="email"
      width={iconSizes.normal}
      height={iconSizes.normal}
      aria-label="Send an email"
    >
      <IconMail />
    </amp-social-share>
    {commentsUri && (
      <CommentsLink href={commentsUri} role="button" aria-label="Read comments">
        <IconBalloon />
      </CommentsLink>
    )}
  </ShareBarContainer>
);

StyledShareBar.propTypes = {
  commentsUri: PropTypes.string,
  className: PropTypes.string,
};

StyledShareBar.defaultProps = {
  commentsUri: '',
  className: '',
};

export default StyledShareBar;
