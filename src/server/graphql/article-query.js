import gql from 'graphql-tag';

const articleFragment = `fragment Article on Content {
  id
  tegID
  type
  url {
    canonical
    comment
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
    promo {
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

const getArticeQuery = (ref) => gql`
{
  data: canonical(ref: "${ref}") 
  {
    ...Article
    print {
      section {
        ...Article
      }
    }
    publication {
      ...Article
    }
  }
}
${articleFragment}
`;

export default getArticeQuery;
