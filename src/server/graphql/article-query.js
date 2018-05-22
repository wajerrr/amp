import gql from 'graphql-tag';
import { fragmentC } from './fragments';

const getArticeQuery = (ref) => gql`
{
  canonical :canonical(ref: "${ref}") 
  {
    ...C
    print {
      section {
        ...C
      }
    }
    publication {
      ...C
    }
  }
}
${fragmentC}
`;

export default getArticeQuery;
