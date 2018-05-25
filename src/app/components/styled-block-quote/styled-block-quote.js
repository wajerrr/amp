import styled from 'react-emotion';
import { color, fontFamily, text, grid } from '../../styles';

const StyledBlockquote = styled('blockquote')`
  display: flex;
  color: ${color.kiev};
  margin: 0 ${grid.gutter.xl} 0 0;
  font-family: ${fontFamily.sans};
  font-size: ${text.sizeStep['1']};
  font-weight: bold;
  line-height: ${text.lineHeight.basic};

  &:before {
    content: '“';
    display: block;
    position: relative;
    top: 6px;
    width: ${grid.gutter.l};
    padding-right: calc(${grid.spacing.mouse} * 1.5);
    color: ${color.economist};
    font-family: ${fontFamily.serif};
    font-size: ${text.sizeStep['7']};
  }
`;

export default StyledBlockquote;
