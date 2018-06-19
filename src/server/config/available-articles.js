const availableArticles = [
  '/open-future/2018/04/16/a-letter-to-readers-from-the-editor',
  '/open-future/2018/04/16/beyond-the-tyranny-of-tolerance',
  '/open-future/2018/04/16/our-essay-competitions-for-young-people',
  '/open-future/2018/04/16/technology-and-its-discontents',
  '/open-future/2018/04/16/terms-and-conditions-for-young-peoples-essay-contests',
  '/open-future/2018/04/16/the-case-for-immigration',
  '/open-future/2018/04/16/the-clash-of-expression',
  '/open-future/2018/04/26/mario-vargas-llosa-in-spanish',
  '/open-future/2018/04/26/mario-vargas-llosa-on-freedom-liberalism-dictatorship-and-ideas',
  '/open-future/2018/04/30/on-nationalism-free-speech-and-donald-trumps-idea-of-justice',
  '/open-future/2018/04/30/should-assimilation-be-a-requirement-for-citizenship',
  '/open-future/2018/04/30/the-wolf-at-the-white-house-correspondents-dinner',
  '/open-future/2018/05/02/why-powellism-versus-enochonomics-tears-liberals-apart',
  '/open-future/2018/05/03/gay-and-womens-rights-are-remarkably-a-part-of-lebanons-elections',
  '/open-future/2018/05/04/a-healthy-re-examination-of-free-trades-benefits-and-shocks',
  '/open-future/2018/05/11/china-and-eurovision-clash-over-an-lgbt-performance-and-the-value-of-diversity',
  '/open-future/2018/05/14/britain-creates-a-more-hostile-environment-for-immigrants',
  '/open-future/2018/05/15/when-respect-for-diversity-is-taken-to-crazy-extremes',
  '/open-future/2018/05/16/the-ironies-of-george-soross-foundation-leaving-budapest',
  '/open-future/2018/05/17/why-liberals-need-to-be-vulgar',
  '/open-future/2018/05/22/what-governments-can-do-for-the-losers-from-free-trade',
  '/open-future/2018/05/23/the-rohingya-crisis-bears-all-the-hallmarks-of-a-genocide',
];
const isAvailableForFree = (articlePath) =>
  availableArticles.includes(articlePath);

export default availableArticles;
export { isAvailableForFree };
