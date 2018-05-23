import gql from 'graphql-tag';
import { articleFragment } from './fragments';

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
