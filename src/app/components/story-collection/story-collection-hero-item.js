import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import styled from 'react-emotion';
import text from '../../styles/typography';
import spacings from '../../styles/spacings';
import SectionLink from './story-collection-section-link';
import ItemHeadline from './story-collection-item-headline';
import color from '../../styles/color';
import fontFamily from '../../styles/font-family';

const StyledDescription = styled('p')`
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

const StyledSectionLink = styled(SectionLink)`
  padding: ${spacings.none} ${spacings.m} ${spacings.m};
`;

const StyledHeroItemTextContainer = styled('div')`
  padding: ${spacings.s} ${spacings.s} ${spacings.xl};
`;

const StyledLinkWrapper = styled('a')`
  font-family: ${fontFamily.serif};
  text-decoration: none;
`;

const headlineStyles = css`
  font-size: ${text.sizeStep['1']};
  font-weight: 500;
  letter-spacing: ${text.lineHeight.letterSpacing.serifOnStep['1']};
  line-height: ${text.lineHeight.serifOnStep['1']};
`;

const subHeadlineStyles = css`
  font-size: ${text.sizeStep['-3']};
  font-weight: 400;
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['-2']};
  line-height: ${text.lineHeight.sansOnStep['-2']};
`;

const StoryCollectionHeroItem = ({
  headline,
  url,
  image,
  subheadline,
  sectionUrl,
  sectionHeadline,
  description,
  className,
}) => (
  <li className={className}>
    <StyledLinkWrapper href={url}>
      {image && (
        <amp-img
          alt={sectionHeadline}
          layout="responsive"
          width={image.width}
          height={image.height}
          src={image.url.canonical}
        />
      )}
      <StyledHeroItemTextContainer>
        <ItemHeadline
          styles={{
            StyledSubHeadline: headlineStyles,
            StyledHeadline: subHeadlineStyles,
          }}
          subHeadline={subheadline}
        >
          {headline}
        </ItemHeadline>
        <StyledDescription>{description}</StyledDescription>
      </StyledHeroItemTextContainer>
    </StyledLinkWrapper>
    <StyledSectionLink href={sectionUrl}>{sectionHeadline}</StyledSectionLink>
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
  sectionUrl: PropTypes.string.isRequired,
  sectionHeadline: PropTypes.string.isRequired,
};

export default StoryCollectionHeroItem;
