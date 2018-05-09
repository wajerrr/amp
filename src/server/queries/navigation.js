import gql from 'graphql-tag';

const N = gql`
  fragment N on Content {
    headline
    hasPart(sort: "isPartOf.context.position") {
      parts {
        headline
        url {
          canonical
        }
        hasPart(sort: "isPartOf.context.position") {
          parts {
            headline
            url {
              canonical
            }
          }
        }
      }
    }
  }
`;

export default N;
