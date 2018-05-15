import React from 'react';
import PropTypes from 'prop-types';
import IconPrintEdition from '@economist/component-icon/lib/inline-icons/print-edition';
import formatDate from '../lib/date-time';
import StyledTime from './styled-time';

const Section = ({ print, publication }) => {
  if (print && print.section) {
    return (
      <a href={print.section.url.canonical}>
        <IconPrintEdition className="icon-print-edition" />
        {`Print version | ${print.section.headline}`}
      </a>
    );
  }
  if (publication && publication[0]) {
    return <a href={publication[0].url.canonical}>{publication[0].headline}</a>;
  }
  return '';
};

const ArticlePublicationDetails = ({
  datePublished,
  byline = '',
  print,
  publication,
  className,
}) => (
  <div className={className}>
    <h3>
      <Section print={print} publication={publication} />
    </h3>
    <div className="date-author">
      <StyledTime time={formatDate(new Date(datePublished))} />
      {byline && ` | by ${byline}`}
    </div>
  </div>
);

ArticlePublicationDetails.propTypes = {
  datePublished: PropTypes.string.isRequired,
  byline: PropTypes.string,
  print: PropTypes.shape({}),
  publication: PropTypes.shape({}),
  className: PropTypes.string,
};

ArticlePublicationDetails.defaultProps = {
  byline: '',
  className: '',
  print: null,
  publication: null,
};

export default ArticlePublicationDetails;
