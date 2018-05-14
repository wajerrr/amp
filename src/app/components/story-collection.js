import React from 'react';

const StoryCollectionHeroItem = ({ data }) => (
  <li>
    <a href={data.url.canonical}>
      <img
        alt={data.channel.headline}
        height="300px"
        src={data.image.main.url.canonical}
      />
      <h4>{data.subheadline}</h4>
      <h3>{data.headline}</h3>
      <p>{data.description}</p>
    </a>
    <a href={data.channel.url.canonical}>{data.channel.headline}</a>
  </li>
);

const StoryCollectionItem = ({ data }) => (
  <li>
    <a href={data.url.canonical}>
      <img
        alt={data.channel.headline}
        height="300px"
        src={data.image.main.url.canonical}
      />
      <h4>{data.subheadline}</h4>
      <h3>{data.headline}</h3>
    </a>
    <a href={data.channel.url.canonical}>{data.channel.headline}</a>
  </li>
);

const StoryCollection = ({ data }) => (
  <ul>
    {data.hasPart.parts.map(
      (el, index) =>
        index === 0 ? (
          <StoryCollectionHeroItem data={el} />
        ) : (
          <StoryCollectionItem data={el} />
        )
    )}
  </ul>
);
export default StoryCollection;
