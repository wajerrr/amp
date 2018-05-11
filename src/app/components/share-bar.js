import React from 'react';
import PropTypes from 'prop-types';
import IconTwitter from '@economist/component-icon/lib/inline-icons/twitter';
import IconFacebook from '@economist/component-icon/lib/inline-icons/facebook';
import IconLinkedin from '@economist/component-icon/lib/inline-icons/linkedin';
import IconMail from '@economist/component-icon/lib/inline-icons/mail';
import IconBalloon from '@economist/component-icon/lib/inline-icons/balloon';

const ShareBar = ({ commentsUri, className }) => (
  <div className={className}>
    <amp-social-share type="twitter" width="31" height="31">
      <IconTwitter />
    </amp-social-share>
    <amp-social-share
      type="facebook"
      width="31"
      height="31"
      data-param-app_id="966242223397117"
    >
      <IconFacebook />
    </amp-social-share>
    <amp-social-share type="linkedin" width="31" height="31">
      <IconLinkedin />
    </amp-social-share>
    <amp-social-share type="email" width="31" height="31">
      <IconMail />
    </amp-social-share>
    {commentsUri && (
      <a href={commentsUri} className="comments-link">
        <IconBalloon />
      </a>
    )}
  </div>
);

ShareBar.propTypes = {
  commentsUri: PropTypes.string,
  className: PropTypes.string,
};

ShareBar.defaultProps = {
  commentsUri: '',
  className: '',
};

export default ShareBar;
