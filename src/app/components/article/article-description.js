import PropTypes from 'prop-types';
import styled from 'react-emotion';
import spacings from '../../styles/spacings';
import fontFamily from '../../styles/font-family';
import text from '../../styles/typography';
import color from '../../styles/color';

const ArticleDescription = styled('p')`
  color: ${color.beijing};
  font-family: ${fontFamily.serif};
  font-size: ${text.sizeStep['0']};
  margin: 0 0 ${spacings.m};
  font-style: italic;
  line-height: 1.4;
`;

ArticleDescription.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArticleDescription;
