import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import IconFacebook from '@economist/component-icon/lib/inline-icons/facebook';
import IconTwitter from '@economist/component-icon/lib/inline-icons/twitter';
import IconGoogleplus from '@economist/component-icon/lib/inline-icons/googleplus';
import IconMail from '@economist/component-icon/lib/inline-icons/mail';
import IconLinkedin from '@economist/component-icon/lib/inline-icons/linkedin';
import IconInstagram from '@economist/component-icon/lib/inline-icons/instagram';
import IconTumblr from '@economist/component-icon/lib/inline-icons/tumblr';
import IconYoutube from '@economist/component-icon/lib/inline-icons/youtube';
import IconRss from '@economist/component-icon/lib/inline-icons/rss';
import iconSizes from '../styles/icon-sizes';
import color from '../styles/color';
import typography from '../styles/typography';
import spacings from '../styles/spacings';

const iconWrapperClassName = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${spacings.m};
`;
const iconClassName = css`
  display: block;
  height: ${iconSizes.large}px;
  & svg {
    fill: ${color.london};
    height: ${iconSizes.large}px;
    width: ${iconSizes.large}px;
  }
`;
const headerClassName = css`
  color: ${color.moscow};
  display: block;
  font-size: ${typography.sizeStep['-1']};
`;

const metaToIcon = {
  facebook: <IconFacebook />,
  twitter: <IconTwitter />,
  googleplus: <IconGoogleplus />,
  mail: <IconMail />,
  linkedin: <IconLinkedin />,
  instagram: <IconInstagram />,
  tumblr: <IconTumblr />,
  youtube: <IconYoutube />,
  rss: <IconRss />,
};

const FooterSocialMenu = ({ menuItems }) => (
  <Fragment>
    <h4 className={headerClassName}>{menuItems.headline}</h4>
    <div className={iconWrapperClassName}>
      {menuItems.hasPart.parts.map((item) => (
        <a
          key={item.isPartOf.context.position}
          className={iconClassName}
          href={item.url.canonical}
        >
          {metaToIcon[item.meta]}
        </a>
      ))}
    </div>
  </Fragment>
);

FooterSocialMenu.propTypes = {
  menuItems: PropTypes.shape({
    headline: PropTypes.string,
    hasPart: PropTypes.shape({}),
  }).isRequired,
};

export default FooterSocialMenu;
