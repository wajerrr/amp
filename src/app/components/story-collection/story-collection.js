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
            channelUrl={el.channel.url.canonical}
            channelHeadline={el.channel.headline}
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
            channelUrl={el.channel.url.canonical}
            channelHeadline={el.channel.headline}
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
