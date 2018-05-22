import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import color from '../../styles/color';
import spacings from '../../styles/spacings';
import typography from '../../styles/typography';
import fontFamily from '../../styles/font-family';

const StyledHeadline = styled('span')`
  display: block;
  margin: ${spacings.none} ${spacings.none} ${spacings.m};
  color: ${color.beijing};
  font-family: ${fontFamily.serif};
  margin-bottom: ${spacings.none};
`;

const StyledSubHeadline = styled('span')`
  overflow: hidden;
  display: block;
  margin: ${spacings.none} ${spacings.none} ${spacings.xs};
  color: ${color.economist};
  font-family: ${fontFamily.sans};
`;

const StyledHeader = styled('h3')`
  margin: ${spacings.none};
  padding: ${spacings.none};
  font-size: ${typography.sizeStep[0]};
`;

const ItemHeadline = ({ subHeadline, children, className, styles }) => (
  <StyledHeader className={className}>
    {subHeadline && (
      <StyledSubHeadline className={styles.StyledSubHeadline}>
        {subHeadline}
      </StyledSubHeadline>
    )}
    <StyledHeadline className={styles.StyledHeadline}>
      {children}
    </StyledHeadline>
  </StyledHeader>
);

ItemHeadline.defaultProps = {
  className: '',
  subHeadline: undefined,
  styles: {},
};

ItemHeadline.propTypes = {
  subHeadline: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  styles: PropTypes.shape({
    StyledSubHeadline: PropTypes.string,
    StyledHeadline: PropTypes.string,
  }),
};

export default ItemHeadline;
