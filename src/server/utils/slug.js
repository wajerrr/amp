const slug = (string, { replacement = '_' } = {}) => {
  const lowerCaseString = String(string || '').toLowerCase();

  // Replace :
  // - '...'
  // - space or multiple spaces
  // - every character that isn't a letter or a number
  return lowerCaseString.replace(
    /\.{3}|\s+|[^a-z0-9\u00C0-\u017F]/g,
    replacement
  );
};

export default slug;
