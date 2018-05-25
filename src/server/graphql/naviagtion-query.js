import gql from 'graphql-tag';

const prodNavigation = '/content/b9b22pmtme3mcv43b3neeeh4h5gjh3g8';

const navigationFragment = `fragment Navigation on Content {
  headline
  id
  hasPart(sort: "isPartOf.context.position") {
    parts {
      id
      headline
      url {
        canonical
      }
      hasPart(sort: "isPartOf.context.position") {
        parts {
          id
          headline
          url {
            canonical
          }
        }
      }
    }
  }
}`;

const navigationQuery = gql`
  {
  data: canonical(ref: "${prodNavigation}") {
    ...Navigation
    }
  }
  ${navigationFragment}
`;

export default navigationQuery;
