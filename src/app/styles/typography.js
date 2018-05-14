/* DO NOT MODIFY. Copied from auth0-api-gateway-hosted-pages/src/css/typography.js */
// This is temporary JS adaptation of the CSS version of the component typography.
// This is necessary till we solve how Emotion can import and use correctly :root
// and related Custom properties.
const initialStep = 1;
const scaleFactor = 1.125;
function produceSteps() {
  let stepUp = initialStep;
  let stepDown = initialStep;
  const steps = {};
  for (let index = 1; index < 8; index += 1) {
    stepUp *= scaleFactor;
    stepDown /= scaleFactor;
    steps[`${index}`] = `${stepUp.toFixed(2)}em`;
    steps[`-${index}`] = `${stepDown.toFixed(2)}em`;
  }
  return steps;
}
const text = {
  // Base text size on a page. To style page elements use relative sizes from below
  baseSize: '18px',
  sizeStep: Object.assign(
    {
      '0': `${initialStep}em`,
    },
    produceSteps()
  ),
  lineHeight: {
    basic: 1.4,
    sansOnStep: {
      '7': 1.25,
      '6': 1.3,
      '5': 1.3,
      '4': 1.35,
      '3': 1.4,
      '2': 1.4,
      '1': 1.41,
      '0': 1.35,
      '-1': 1.4,
      '-2': 1.34,
    },
    /* Font: Halifax Bold */
    sansBoldOnStep: {
      '7': 1.1,
      '6': 1.17,
      '5': 1.22,
      '4': 1.23,
      '3': 1.3,
      '2': 1.33,
      '1': 1.3,
      '0': 1.3,
      '-1': 1.28,
      '-2': 1.4,
    },
    /* Font: Halifax Light */
    sansLightOnStep: {
      '7': 1.21,
      '5': 1.33,
      '6': 1.25,
      '4': 1.3,
      '3': 1.34,
      '2': 1.3,
      '1': 1.3,
      '0': 1.35,
      '-1': 1.35,
      '-2': 1.4,
    },
    /* Font: Ff Milo Serif Pro Med Italic */
    serifItalicOnStep: {
      '7': 1.2,
      '6': 1.23,
      '5': 1.25,
      '4': 1.25,
      '3': 1.25,
      '2': 1.26,
      '1': 1.27,
      '0': 1.27,
      '-1': 1.24,
      '-2': 1.25,
    },
    serifOnStep: {
      /* Font: Ff Milo Serif Pro */
      '7': 1.18,
      '6': 1.26,
      '5': 1.27,
      '4': 1.33,
      '3': 1.36,
      '2': 1.37,
      '1': 1.37,
      '0': 1.4,
      '-1': 1.38,
      '-2': 1.38,
    },
    /* Font: FF Milo Serif OT Medium */
    serifMediumOnStep: {
      '7': 1.2,
      '6': 1.23,
      '5': 1.25,
      '4': 1.25,
      '3': 1.25,
      '2': 1.26,
      '1': 1.27,
      '0': 1.27,
      '-1': 1.24,
      '-2': 1.25,
    },
    letterSpacing: {
      sansOnStep: {
        /* Font: Halifax Regular */
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        '3': 'normal',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': 'normal',
        '-2': 'normal',
      },
      sansBoldOnStep: {
        /* Font: Halifax Bold */
        '7': 'normal',
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        ' ': '0.003em',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': 'normal',
        '-2': 'normal',
      },
      sansLightOnStep: {
        /* Font: Halifax Light */
        '7': 'normal',
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        '3': 'normal',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': '0.015em',
        '-2': '0.015em',
      },
      serifItalicOnStep: {
        /* Font: Ff Milo Serif Pro Med Italic */
        '7': 'normal',
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        '3': 'normal',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': 'normal',
        '-2': 'normal',
      },
      serifOnStep: {
        /* Font: Ff Milo Serif Pro */
        '7': 'normal',
        '6': 'normal',
        '5': 'normal',
        '4': 'normal',
        '3': 'normal',
        '2': 'normal',
        '1': 'normal',
        '0': 'normal',
        '-1': 'normal',
        '-2': 'normal',
      },
      serifMediumOnStep: {
        /* Font: FF Milo Serif OT Medium */
        '7': '-0.02em',
        '6': '-0.02em',
        '5': '-0.02em',
        '4': '-0.02em',
        '3': '-0.02em',
        '2': '-0.02em',
        '1': '-0.02em',
        '0': '-0.02em',
        '-1': '-0.02em',
        '-2': '-0.02em',
      },
    },
  },
};
export default text;
