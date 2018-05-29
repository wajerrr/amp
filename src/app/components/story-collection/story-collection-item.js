import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import styled from 'react-emotion';
import text from '../../styles/typography';
import spacings from '../../styles/spacings';
import SectionLink from './story-collection-section-link';
import ItemHeadline from './story-collection-item-headline';
import getSrcset, {
  halfWidthSize,
  fullWidthSize,
} from '../../../config/images';

const StyledTextContainer = styled('div')`
  padding: ${spacings.s};
  width: 50%;
`;

const StyledLinkWrapper = styled('a')`
  display: flex;
  text-decoration: none;
`;

const StyledImgContainer = styled('div')`
  width: 50%;
`;

const StyledSectionLink = styled(SectionLink)`
  overflow: hidden;
  display: block;
  width: calc(50% - ${spacings.l});
  margin-left: 50%;
  margin-top: -${spacings.l};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const headlineStyles = css`
  font-size: ${text.sizeStep['0']};
  font-weight: 500;
  letter-spacing: ${text.lineHeight.letterSpacing.serifMediumOnStep['-2']};
  line-height: ${text.lineHeight.serifMediumOnStep['-2']};
  padding-bottom: ${spacings.l};
`;

const subHeadlineStyles = css`
  font-size: ${text.sizeStep['-2']};
  font-weight: 400;
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['-2']};
  line-height: ${text.lineHeight.sansOnStep['-2']};
`;

const StoryCollectionItem = ({
  headline,
  url,
  image,
  subheadline,
  sectionUrl,
  sectionHeadline,
  className,
}) => (
  <li className={className}>
    <StyledLinkWrapper href={url}>
      <StyledImgContainer>
        {image && (
          <amp-img
            alt={sectionHeadline}
            width={image.width}
            height={image.height}
            layout="responsive"
            src={image.url.canonical}
            srcset={getSrcset(image.url.canonical)}
            sizes={halfWidthSize}
          />
        )}
      </StyledImgContainer>
      <StyledTextContainer>
        <ItemHeadline
          styles={{
            StyledHeadline: headlineStyles,
            StyledSubHeadline: subHeadlineStyles,
          }}
          subHeadline={subheadline}
        >
          {headline}
        </ItemHeadline>
      </StyledTextContainer>
    </StyledLinkWrapper>
    <StyledSectionLink href={sectionUrl}>{sectionHeadline}</StyledSectionLink>
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
  sectionUrl: PropTypes.string.isRequired,
  sectionHeadline: PropTypes.string.isRequired,
};

export default StoryCollectionItem;
