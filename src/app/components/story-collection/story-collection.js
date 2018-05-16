import React from 'react';
import { css } from 'emotion';
import { PropTypes } from 'prop-types';
import StoryCollectionItem from './story-collection-item';
import StoryCollectionHeroItem from './story-collection-hero-item';
import spacings from '../../styles/spacings';
import color from '../../styles/color';

const storyCollection = css`
  margin: ${spacings.none};
  padding: ${spacings.none};
  list-style-type: none;
  a {
    text-decoration: none;
    &:hover {
      .headline {
        color: ${color.chicago};
      }
    }
  }
`;
const item = css`
  margin-top: ${spacings.s};
`;

const StoryCollection = ({ data }) => (
  <ul className={storyCollection}>
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
          <StoryCollectionItem
            headline={el.headline}
            url={el.url.canonical}
            image={el.image.main}
            subheadline={el.subheadline}
            channelUrl={el.channel.url.canonical}
            channelHeadline={el.channel.headline}
            className={item}
            key={el.id}
            data={el}
          />
        )
    )}
  </ul>
);

StoryCollection.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default StoryCollection;
