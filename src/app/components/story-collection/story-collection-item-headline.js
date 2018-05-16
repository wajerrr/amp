import React from 'react';
import { css } from 'emotion';
import { PropTypes } from 'prop-types';

import color from '../../styles/color';
import fontFamily from '../../styles/font-family';
import spacings from '../../styles/spacings';

const baseSubHeadline = css`
  overflow: hidden;
  display: block;
  margin: ${spacings.none} ${spacings.none} ${spacings.xs};
  color: ${color.economist};
  font-family: ${fontFamily.sans};
`;

const baseHeadline = css`
  display: block;
  margin: ${spacings.none} ${spacings.none} ${spacings.m};
  color: ${color.beijing};
  font-family: ${fontFamily.serif};
  margin-bottom: ${spacings.none};
`;

const header = css`
  margin: ${spacings.none};
  padding: ${spacings.none};
`;

const ItemHeadline = ({
  subHeadline,
  subHeadlineClassName,
  headlineClassName,
  children,
  className,
}) => (
  <h3 className={`${header} ${className}`}>
    {subHeadline && (
      <span className={`${baseSubHeadline} ${subHeadlineClassName}`}>
        {subHeadline}
      </span>
    )}
    <span className={`headline ${baseHeadline} ${headlineClassName}`}>
      {children}
    </span>
  </h3>
);

ItemHeadline.defaultProps = {
  className: '',
  subHeadline: undefined,
  subHeadlineClassName: '',
  headlineClassName: '',
};

ItemHeadline.propTypes = {
  subHeadline: PropTypes.string,
  className: PropTypes.string,
  subHeadlineClassName: PropTypes.string,
  headlineClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ItemHeadline;
