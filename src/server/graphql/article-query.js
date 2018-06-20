import gql from 'graphql-tag';

const articleFragment = `fragment Article on Content {
  id
  tegID
  type
  tegType
  url {
    canonical
    comment
  }
  headline
  subheadline
  description
  datePublished
  dateModified
  author {id}
  byline
  text(format: "json")
  regionsAllowed
  isAccessibleForFree
  ad {
    siteCode
    zoneCode
    environment
  }
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

const getArticleQuery = (ref) => gql`
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

export default getArticleQuery;
