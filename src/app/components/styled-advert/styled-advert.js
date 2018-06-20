import styled from 'react-emotion';
import InlineAd from '../advert/inline-ad';
import { spacings } from '../../styles';

const StyledInlineAd = styled(InlineAd)`
  text-align: center;
  margin: ${spacings.l} ${spacings.none};
`;

export default StyledInlineAd;
