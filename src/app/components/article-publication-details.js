import React from 'react';
import PropTypes from 'prop-types';
import IconPrintEdition from '@economist/component-icon/lib/inline-icons/print-edition';
import formatDate from '../lib/date-time';
import StyledTime from './styled-time';

const Section = ({ printSection, publication }) =>
  printSection ? (
    <a href={printSection.url.canonical}>
      <IconPrintEdition className="icon-print-edition" />
      {`Print version | ${printSection.headline}`}
    </a>
  ) : (
    publication && (
      <a href={publication.url.canonical}>{publication.headline}</a>
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

const ArticlePublicationDetails = ({
  datePublished,
  byline = '',
  printSection,
  publication,
  className,
}) => (
  <div className={className}>
    {(printSection || publication) && (
      <h3>
        <Section printSection={printSection} publication={publication} />
      </h3>
    )}
    <div className="date-author">
      <StyledTime time={formatDate(new Date(datePublished))} />
      {byline && ` | by ${byline}`}
    </div>
  </div>
);

ArticlePublicationDetails.propTypes = {
  datePublished: PropTypes.string.isRequired,
  byline: PropTypes.string,
  printSection: PropTypes.shape({}),
  publication: PropTypes.shape({}),
  className: PropTypes.string,
};

ArticlePublicationDetails.defaultProps = {
  byline: '',
  className: '',
  printSection: null,
  publication: null,
};

export default ArticlePublicationDetails;
