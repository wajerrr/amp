import React from 'react';
import PropTypes from 'prop-types';

const StyledTime = ({ time }) => <time>{time}</time>;

StyledTime.propTypes = {
  time: PropTypes.string.isRequired,
};

export default StyledTime;
