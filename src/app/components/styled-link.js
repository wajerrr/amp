import styled from 'react-emotion';
import color from '../styles/color';

const StyledLink = styled('a')`
  color: inherit;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 2px solid ${color.kosice};
  &:hover,
  &.visited {
    color: ${color.chicago};
    border-bottom-color: ${color.chicago};
  }
`;

export default StyledLink;
