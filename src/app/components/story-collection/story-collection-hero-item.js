import React from 'react';
import { PropTypes } from 'prop-types';
import { css } from 'emotion';

import text from '../../styles/typography';
import spacings from '../../styles/spacings';
import SectionLink from './story-collection-section-link';
import ItemHeadline from './story-collection-item-headline';
import color from '../../styles/color';
import fontFamily from '../../styles/font-family';

const descriptionStyle = css`
  margin: ${spacings.none};
  padding: ${spacings.none};
  font-style: italic;
  font-weight: 300;
  padding-top: ${spacings.s};
  font-family: ${fontFamily.serif};
  letter-spacing: ${text.lineHeight.letterSpacing.serifOnStep['-2']};
  line-height: ${text.lineHeight.serifOnStep['-2']};
  color: ${color.beijing};
  font-size: ${text.sizeStep['-2']};
`;

const sectionLink = css`
  padding: ${spacings.none} ${spacings.m} ${spacings.m};
`;

const heroItemTextContainer = css`
  padding: ${spacings.s} ${spacings.s} ${spacings.xl};
`;

const subHeadline = css`
  font-size: ${text.sizeStep['-3']};
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['-2']};
  line-height: ${text.lineHeight.sansOnStep['-2']};
`;

const headlineStyle = css`
  font-size: ${text.sizeStep['1']};
  font-weight: 500;
  letter-spacing: ${text.lineHeight.letterSpacing.serifOnStep['1']};
  line-height: ${text.lineHeight.serifOnStep['1']};
`;

const StoryCollectionHeroItem = ({
  headline,
  url,
  image,
  subheadline,
  channelUrl,
  channelHeadline,
  description,
  className,
}) => (
  <li className={className}>
    <a href={url}>
      <amp-img
        alt={channelHeadline}
        layout="responsive"
        width={image.width}
        height={image.height}
        src={image.url.canonical}
      />
      <div className={heroItemTextContainer}>
        <ItemHeadline
          subHeadlineClassName={subHeadline}
          headlineClassName={headlineStyle}
          subheadline={subheadline}
        >
          {headline}
        </ItemHeadline>
        <p className={descriptionStyle}>{description}</p>
      </div>
    </a>
    <SectionLink className={sectionLink} href={channelUrl}>
      {channelHeadline}
    </SectionLink>
  </li>
);

StoryCollectionHeroItem.defaultProps = { className: '' };

StoryCollectionHeroItem.propTypes = {
  className: PropTypes.string,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.shape({
      canonical: PropTypes.string.isRequired,
    }),
  }).isRequired,
  subheadline: PropTypes.string.isRequired,
  channelUrl: PropTypes.string.isRequired,
  channelHeadline: PropTypes.string.isRequired,
};

export default StoryCollectionHeroItem;
