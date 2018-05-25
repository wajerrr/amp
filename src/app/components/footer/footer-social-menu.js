import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import IconFacebook from '@economist/component-icon/lib/inline-icons/facebook';
import IconTwitter from '@economist/component-icon/lib/inline-icons/twitter';
import IconGoogleplus from '@economist/component-icon/lib/inline-icons/googleplus';
import IconMail from '@economist/component-icon/lib/inline-icons/mail';
import IconLinkedin from '@economist/component-icon/lib/inline-icons/linkedin';
import IconInstagram from '@economist/component-icon/lib/inline-icons/instagram';
import IconTumblr from '@economist/component-icon/lib/inline-icons/tumblr';
import IconYoutube from '@economist/component-icon/lib/inline-icons/youtube';
import IconRss from '@economist/component-icon/lib/inline-icons/rss';
import iconSizes from '../../styles/icon-sizes';
import color from '../../styles/color';
import typography from '../../styles/typography';
import spacings from '../../styles/spacings';

const StyledHeader = styled('h4')`
  color: ${color.moscow};
  display: block;
  font-size: ${typography.sizeStep['-1']};
`;

const StyledIconWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${spacings.m};
`;

const StyledLink = styled('a')`
  display: block;
  height: ${iconSizes.large}px;
  & svg {
    fill: ${color.london};
    height: ${iconSizes.large}px;
    width: ${iconSizes.large}px;
  }
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

const FooterSocialMenu = ({ menuItem }) => (
  <Fragment>
    <StyledHeader>{menuItem.headline}</StyledHeader>
    <StyledIconWrapper>
      {menuItem.hasPart.parts.map(
        (item) =>
          metaToIcon[item.meta] && (
            <StyledLink
              key={item.isPartOf.context.position}
              href={item.url.canonical}
              target="_blank"
              aria-label={item.meta}
            >
              {metaToIcon[item.meta]}
            </StyledLink>
          )
      )}
    </StyledIconWrapper>
  </Fragment>
);

FooterSocialMenu.propTypes = {
  menuItem: PropTypes.shape({
    headline: PropTypes.string,
    hasPart: PropTypes.shape({}),
  }).isRequired,
};

export default FooterSocialMenu;
