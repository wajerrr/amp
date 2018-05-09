const articleFragment = `{
  id
  tegID
  tegType
  type
  url {
    canonical
  }
  headline
  subheadline
  description
  datePublished
  byline
  text(format: "json")
  regionsAllowed
  isAccessibleForFree
  image {
    main {
      id
      width
      height
      headline
      url {
        canonical
      }
    }
  }
}`;

export default articleFragment;
