import PropTypes from 'prop-types';
import styled from 'react-emotion';
import spacings from '../../styles/spacings';
import color from '../../styles/color';

const StyledFooterLink = styled('a', {
  shouldForwardProp: (prop) =>
    ['className', 'href', 'key', 'children'].includes(prop),
})`
  text-decoration: none;
  display: inline-block;
  padding: ${spacings.l} 0;
  width: 50%;
  color: ${(props) =>
    props.sectionLevel === 0 ? color.thimphu : color.london};
  &:active {
    opacity: 0.3;
  }
`;

StyledFooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  sectionLevel: PropTypes.number.isRequired,
};

export default StyledFooterLink;
