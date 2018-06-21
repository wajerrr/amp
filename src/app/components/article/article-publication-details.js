import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import IconPrintEdition from '@economist/component-icon/lib/inline-icons/print-edition';
import { spacings, text, color, iconSizes } from '../../styles';
import formatDate, { getISODate } from '../../utils/date-time';
import StyledTime from '../styled-time/styled-time';
import StyledLink from '../styled-link/styled-link';
import StyledShareBar from '../styled-share-bar/styled-share-bar';

const StyledIconPrintEdition = styled(IconPrintEdition)`
  svg {
    width: ${iconSizes.small}px;
    height: ${iconSizes.small}px;
    vertical-align: middle;
    margin-left: -4px;
    padding-bottom: 3px;
    fill: ${color.moscow};
  }
`;

const StyledSectionLink = styled(StyledLink)`
  &,
  &:active,
  &:visited {
    color: ${color.moscow};
    text-decoration: none;
    border-bottom: none;
  }
`;

const Section = ({ printSection, publication }) =>
  printSection ? (
    <StyledSectionLink href={printSection.url.canonical}>
      <StyledIconPrintEdition />
      {'Print version'}
      {printSection.headline && ` | ${printSection.headline}`}
    </StyledSectionLink>
  ) : (
    publication && (
      <StyledSectionLink href={publication.url.canonical}>
        {publication.headline}
      </StyledSectionLink>
    )
  );

Section.propTypes = {
  printSection: PropTypes.shape({}),
  publication: PropTypes.shape({}),
};

Section.defaultProps = {
  printSection: null,
  publication: null,
};

const StyledPublicationsContainer = styled('div')`
  width: 100%;
  color: ${color.moscow};
  padding: ${spacings.s} ${spacings.none};
  margin: ${spacings.s} ${spacings.none};
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: ${color.cardiff};
`;

const StyledPublicationHead = styled('p')`
  margin: ${spacings.none};
  color: ${color.beijing};
  font-size: ${text.sizeStep['-2']};
  font-weight: 500;
  line-height: ${text.lineHeight.sansOnStep['-2']};
  &:after {
    content: '';
    display: inline-block;
    vertical-align: sub;
    width: ${spacings.l};
    height: ${spacings.l};
    background: url('data:image/svg+xml;data:text/plain;charset=utf-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20viewBox%3D%220%200%2048%2048%22%20style%3D%22enable-background%3Anew%200%200%2048%2048%3B%22%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%23383E42%22%3E%0D%0A%20%20%20%3Cpolygon%20points%3D%2217.6%2C14.8%2020.4%2C12%2032.4%2C24%2020.4%2C36%2017.6%2C33.2%2026.7%2C24%20%09%22%2F%3E%0D%0A%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    fill: ${color.london};
  }
`;

const StyledDateAuthor = styled('div')`
  font-size: ${text.sizeStep['-3']};
  line-height: ${text.lineHeight.sansOnStep['-3']};
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['-3']};
`;

const ByLine = ({ byline }) => (
  <Fragment>
    {' | by '}
    <span itemProp="author">{byline}</span>
  </Fragment>
);

ByLine.propTypes = {
  byline: PropTypes.string.isRequired,
};

const ArticlePublicationDetails = ({
  datePublished,
  byline = '',
  printSection,
  publication,
  commentsUri,
}) => (
  <StyledPublicationsContainer>
    {(printSection || publication) && (
      <StyledPublicationHead>
        <Section printSection={printSection} publication={publication} />
      </StyledPublicationHead>
    )}
    <StyledDateAuthor>
      <StyledTime itemProp="datePublished" content={getISODate(datePublished)}>
        {formatDate(new Date(datePublished))}
      </StyledTime>
      {byline ? (
        <ByLine byline={byline} />
      ) : (
        <meta itemProp="author" content="The Economist" />
      )}
    </StyledDateAuthor>
    <StyledShareBar commentsUri={commentsUri} />
  </StyledPublicationsContainer>
);

ArticlePublicationDetails.propTypes = {
  datePublished: PropTypes.string.isRequired,
  byline: PropTypes.string,
  printSection: PropTypes.shape({}),
  publication: PropTypes.shape({}),
  commentsUri: PropTypes.string,
};

ArticlePublicationDetails.defaultProps = {
  byline: '',
  printSection: null,
  publication: null,
  commentsUri: '',
};

export default ArticlePublicationDetails;
