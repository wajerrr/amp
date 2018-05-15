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

const headline = css`
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

const StoryCollectionItem = ({ data, className }) => (
  <li className={className}>
    <a className={link} href={data.url.canonical}>
      <div className={imgContainer}>
        <amp-img
          alt={data.channel.headline}
          width={data.image.main.width || '1280'}
          height={data.image.main.height || '720'}
          layout="responsive"
          src={data.image.main.url.canonical}
        />
      </div>
      <div className={textContainer}>
        <ItemHeadline
          subHeadlineClassName={subHeadline}
          headlineClassName={headline}
          subheadline={data.subheadline}
        >
          {data.headline}
        </ItemHeadline>
      </div>
    </a>
    <SectionLink className={sectionLink} href={data.channel.url.canonical}>
      {data.channel.headline}
    </SectionLink>
  </li>
);

StoryCollectionItem.defaultProps = { className: '' };

StoryCollectionItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({}).isRequired,
};

export default StoryCollectionItem;
