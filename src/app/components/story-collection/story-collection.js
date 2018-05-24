import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import spacings from '../../styles/spacings';
import StoryCollectionItem from './story-collection-item';
import StoryCollectionHeroItem from './story-collection-hero-item';

const StyledStoryCollectionContainer = styled('ul')`
  margin: ${spacings.none};
  padding: ${spacings.none};
  list-style-type: none;
`;

const StyledStoryCollectionItem = styled(StoryCollectionItem)`
  margin-top: ${spacings.s};
`;

const getSectionInfo = (part) => {
  const sectionInfo = {};
  if (
    part.articleSection &&
    part.articleSection.internal &&
    part.articleSection.internal[0]
  ) {
    const section = part.articleSection.internal[0];
    if (section.url) {
      sectionInfo.url = section.url.canonical;
    }
    sectionInfo.headline = section.headline;
  }
  return sectionInfo;
};

const StoryCollection = ({ data }) => (
  <StyledStoryCollectionContainer>
    {data.hasPart.parts.map(
      (el, index) =>
        index === 0 ? (
          <StoryCollectionHeroItem
            headline={el.headline}
            url={el.url.canonical}
            image={el.image.main}
            subheadline={el.subheadline}
            sectionUrl={getSectionInfo(el).url}
            sectionHeadline={getSectionInfo(el).headline}
            description={el.description}
            key={el.id}
            data={el}
          />
        ) : (
          <StyledStoryCollectionItem
            headline={el.headline}
            url={el.url.canonical}
            image={el.image.main}
            subheadline={el.subheadline}
            sectionUrl={getSectionInfo(el).url}
            sectionHeadline={getSectionInfo(el).headline}
            key={el.id}
            data={el}
          />
        )
    )}
  </StyledStoryCollectionContainer>
);

StoryCollection.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default StoryCollection;
