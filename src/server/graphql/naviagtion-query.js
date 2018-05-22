import gql from 'graphql-tag';
import { fragmentN } from './fragments';

const prodNavigation = '/content/b9b22pmtme3mcv43b3neeeh4h5gjh3g8';
// const stageNavigation = '/content/11i5sf2m5v0hmlknqrthfpvpi0or4peu';

const navigationQuery = gql`
  {
    navigation: canonical(ref: "${prodNavigation}") {
    ...N
    }
  }
  ${fragmentN}
`;

export default navigationQuery;
