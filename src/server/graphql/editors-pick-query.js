import gql from 'graphql-tag';

const editorsPickRef = '/content/9qe6f6cm77btf0phaepjui01ckh6rfpu';

const EditorsPickFragment = `fragment EditorsPick on Content {
  tegID
  id
  hasPart {
    parts {
      id
      articleSection {
        internal {
          url {
            canonical
          }
          headline
        }
      }
      headline
      subheadline
      description
      byline
      url {
        canonical
      }
      image {
        main {
          width
          height
          url {
            canonical
          }
        }
      }
    }
  }
}`;

const editorsPickQuery = gql`
  {
     data: canonical(ref: "${editorsPickRef}") 
    {
      ... EditorsPick
    }
  }
  ${EditorsPickFragment}
  `;
export default editorsPickQuery;
