import React from 'react';
import { PropTypes } from 'prop-types';
import { css } from 'emotion';

import text from '../../styles/typography';
import spacings from '../../styles/spacings';
import SectionLink from './story-collection-section-link';
import ItemHeadline from './story-collection-item-headline';

const textContainer = css`
  padding: ${spacings.s};
  width: 50%;
`;

const headlineStyle = css`
  font-size: ${text.sizeStep['0']};
  font-weight: 500;
  letter-spacing: ${text.lineHeight.letterSpacing.serifOnStep['0']};
  line-height: ${text.lineHeight.serifOnStep['0']};
`;

const subHeadline = css`
  font-size: ${text.sizeStep['-4']};
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['-2']};
  line-height: ${text.lineHeight.sansOnStep['-2']};
`;

const sectionLink = css`
  overflow: hidden;
  display: block;
  width: calc(50% - ${spacings.l});
  margin-left: 50%;
  margin-top: -${spacings.l};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const imgContainer = css`
  width: 50%;
`;

const link = css`
  display: flex;
`;

const StoryCollectionItem = ({
  headline,
  url,
  image,
  subheadline,
  channelUrl,
  channelHeadline,
  className,
}) => (
  <li className={className}>
    <a className={link} href={url}>
      <div className={imgContainer}>
        <amp-img
          alt={channelHeadline}
          width={image.width}
          height={image.height}
          layout="responsive"
          src={image.url.canonical}
        />
      </div>
      <div className={textContainer}>
        <ItemHeadline
          subHeadlineClassName={subHeadline}
          headlineClassName={headlineStyle}
          subheadline={subheadline}
        >
          {headline}
        </ItemHeadline>
      </div>
    </a>
    <SectionLink className={sectionLink} href={channelUrl}>
      {channelHeadline}
    </SectionLink>
  </li>
);

StoryCollectionItem.defaultProps = { className: '' };

StoryCollectionItem.propTypes = {
  className: PropTypes.string,
  headline: PropTypes.string.isRequired,
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

export default StoryCollectionItem;
