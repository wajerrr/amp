import gql from 'graphql-tag';
import { EditorsPickFragment } from './fragments';

const editorsPickRef = '/content/9qe6f6cm77btf0phaepjui01ckh6rfpu';

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
