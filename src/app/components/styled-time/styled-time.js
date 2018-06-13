import React from 'react';
import PropTypes from 'prop-types';

const StyledTime = ({ itemProp, content, children }) => (
  <time itemProp={itemProp} content={content}>
    {children}
  </time>
);

StyledTime.propTypes = {
  content: PropTypes.string,
  itemProp: PropTypes.string,
  children: PropTypes.node.isRequired,
};

StyledTime.defaultProps = {
  content: '',
  itemProp: '',
};

export default StyledTime;
