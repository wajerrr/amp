import gql from 'graphql-tag';
import { navigationFragment } from './fragments';

const prodNavigation = '/content/b9b22pmtme3mcv43b3neeeh4h5gjh3g8';
// const stageNavigation = '/content/11i5sf2m5v0hmlknqrthfpvpi0or4peu';

const navigationQuery = gql`
  {
  data: canonical(ref: "${prodNavigation}") {
    ...Navigation
    }
  }
  ${navigationFragment}
`;

export default navigationQuery;
