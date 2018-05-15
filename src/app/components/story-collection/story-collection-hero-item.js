import React from 'react';
import { PropTypes } from 'prop-types';
import { css } from 'emotion';

import text from '../../styles/typography';
import spacings from '../../styles/spacings';
import SectionLink from './story-collection-section-link';
import ItemHeadline from './story-collection-item-headline';
import color from '../../styles/color';
import fontFamily from '../../styles/font-family';

const description = css`
  margin: 0;
  padding: 0;
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
  padding: 0 ${spacings.m} ${spacings.m};
`;

const heroItemTextContainer = css`
  padding: ${spacings.s} ${spacings.s} ${spacings.xl};
`;

const subHeadline = css`
  font-size: ${text.sizeStep['-3']};
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['-2']};
  line-height: ${text.lineHeight.sansOnStep['-2']};
`;

const headline = css`
  font-size: ${text.sizeStep['1']};
  font-weight: 500;
  letter-spacing: ${text.lineHeight.letterSpacing.serifOnStep['1']};
  line-height: ${text.lineHeight.serifOnStep['1']};
`;

const StoryCollectionHeroItem = ({ data, className }) => (
  <li className={className}>
    <a href={data.url.canonical}>
      <amp-img
        alt={data.channel.headline}
        layout="responsive"
        width={data.image.main.width || '1280'}
        height={data.image.main.height || '720'}
        src={data.image.main.url.canonical}
      />
      <div className={heroItemTextContainer}>
        <ItemHeadline
          subHeadlineClassName={subHeadline}
          headlineClassName={headline}
          subheadline={data.subheadline}
        >
          {data.headline}
        </ItemHeadline>
        <p className={description}>{data.description}</p>
      </div>
    </a>
    <SectionLink className={sectionLink} href={data.channel.url.canonical}>
      {data.channel.headline}
    </SectionLink>
  </li>
);

StoryCollectionHeroItem.defaultProps = { className: '' };

StoryCollectionHeroItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({}).isRequired,
};

export default StoryCollectionHeroItem;
