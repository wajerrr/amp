/* DO NOT MODIFY. Copied from component-typography/src/font-face.css */
import { injectGlobal } from 'emotion';

export default function injectFontFace() {
  return injectGlobal`
/* stylelint-disable value-keyword-case */
/* too many components refer to EconSans */

/* Primary subset fonts (aA-zZ 0-9 etc). */

@font-face {
  font-display: swap;
  font-family: EconSans;
  font-weight: 300;
  src:
    url('/assets/econsans-primary-subset-li.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-li.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSans;
  font-style: normal;
  src:
    url('/assets/econsans-primary-subset-rg.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-rg.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSans;
  font-style: italic;
  src:
    url('/assets/econsans-primary-subset-it.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-it.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSans;
  font-weight: 500;
  src:
    url('/assets/econsans-primary-subset-md.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-md.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSans;
  font-weight: 700;
  src:
    url('/assets/econsans-primary-subset-bd.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-bd.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifPro;
  font-style: normal;
  src:
    url('/assets/milo-primary-subset-rg.woff2') format('woff2'),
    url('/assets/milo-primary-subset-rg.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifPro;
  font-style: italic;
  src:
    url('/assets/milo-primary-subset-it.woff2') format('woff2'),
    url('/assets/milo-primary-subset-it.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifPro;
  font-weight: 500;
  src:
    url('/assets/milo-primary-subset-md.woff2') format('woff2'),
    url('/assets/milo-primary-subset-md.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifPro;
  font-weight: 700;
  src:
    url('/assets/milo-primary-subset-bd.woff2') format('woff2'),
    url('/assets/milo-primary-subset-bd.woff') format('woff');
}

/* Condensed econsans used in charts and infographics. */

@font-face {
  font-display: swap;
  font-family: EconSansCnd;
  font-weight: 300;
  src:
    url('/assets/econsans-primary-subset-cd-li.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-cd-li.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansCnd;
  font-weight: normal;
  src:
    url('/assets/econsans-primary-subset-cd-rg.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-cd-rg.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansCnd;
  font-style: italic;
  font-weight: normal;
  src:
    url('/assets/econsans-primary-subset-cd-it.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-cd-it.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansCnd;
  font-weight: 500;
  src:
    url('/assets/econsans-primary-subset-cd-md.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-cd-md.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansCnd;
  font-weight: 700;
  src:
    url('/assets/econsans-primary-subset-cd-bd.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-cd-bd.woff') format('woff');
}

/* Secondary subset fonts (all other characters) */

@font-face {
  font-display: swap;
  font-family: EconSansSec;
  font-weight: 300;
  src:
    url('/assets/econsans-primary-subset-li.woff2') format('woff2'),
    url('/assets/econsans-primary-subset-li.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansSec;
  font-style: normal;
  src:
    url('/assets/econsans-secondary-subset-rg.woff2') format('woff2'),
    url('/assets/econsans-secondary-subset-rg.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansSec;
  font-style: italic;
  src:
    url('/assets/econsans-secondary-subset-it.woff2') format('woff2'),
    url('/assets/econsans-secondary-subset-it.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansSec;
  font-weight: 500;
  src:
    url('/assets/econsans-secondary-subset-md.woff2') format('woff2'),
    url('/assets/econsans-secondary-subset-md.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansSec;
  font-weight: 700;
  src:
    url('/assets/econsans-secondary-subset-bd.woff2') format('woff2'),
    url('/assets/econsans-secondary-subset-bd.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifProSec;
  font-style: normal;
  src:
    url('/assets/milo-secondary-subset-rg.woff2') format('woff2'),
    url('/assets/milo-secondary-subset-rg.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifProSec;
  font-style: italic;
  src:
    url('/assets/milo-secondary-subset-it.woff2') format('woff2'),
    url('/assets/milo-secondary-subset-it.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifProSec;
  font-weight: 500;
  src:
    url('/assets/milo-secondary-subset-md.woff2') format('woff2'),
    url('/assets/milo-secondary-subset-md.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifProSec;
  font-weight: 700;
  src:
    url('/assets/milo-secondary-subset-bd.woff2') format('woff2'),
    url('/assets/milo-secondary-subset-bd.woff') format('woff');
}

/* Condensed econsans used in charts and infographics. */

@font-face {
  font-display: swap;
  font-family: EconSansCnd-secondary;
  font-weight: 300;
  src:
    url('/assets/econsans-secondary-subset-cd-li.woff2') format('woff2'),
    url('/assets/econsans-secondary-subset-cd-li.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansCnd-secondary;
  font-weight: normal;
  src:
    url('/assets/econsans-secondary-subset-cd-rg.woff2') format('woff2'),
    url('/assets/econsans-secondary-subset-cd-rg.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansCnd-secondary;
  font-style: italic;
  font-weight: normal;
  src:
    url('/assets/econsans-secondary-subset-cd-it.woff2') format('woff2'),
    url('/assets/econsans-secondary-subset-cd-it.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansCnd-secondary;
  font-weight: 500;
  src:
    url('/assets/econsans-secondary-subset-cd-md.woff2') format('woff2'),
    url('/assets/econsans-secondary-subset-cd-md.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansCnd-secondary;
  font-weight: 700;
  src:
    url('/assets/econsans-secondary-subset-cd-bd.woff2') format('woff2'),
    url('/assets/econsans-secondary-subset-cd-bd.woff') format('woff');
}

/* Smallcaps fonts. */

@font-face {
  font-display: swap;
  font-family: MiloSerifProSmallCaps;
  font-style: normal;
  src:
    url('/assets/milo-smallcaps-rg.woff2') format('woff2'),
    url('/assets/milo-smallcaps-rg.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifProSmallCaps;
  font-style: italic;
  src:
    url('/assets/milo-smallcaps-it.woff2') format('woff2'),
    url('/assets/milo-smallcaps-it.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifProSmallCaps;
  font-weight: 300;
  src:
    url('/assets/milo-smallcaps-li.woff2') format('woff2'),
    url('/assets/milo-smallcaps-li.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifProSmallCaps;
  font-weight: 500;
  src:
    url('/assets/milo-smallcaps-md.woff2') format('woff2'),
    url('/assets/milo-smallcaps-md.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: MiloSerifProSmallCaps;
  font-weight: 700;
  src:
    url('/assets/milo-smallcaps-bd.woff2') format('woff2'),
    url('/assets/milo-smallcaps-bd.woff') format('woff');
}`;
}
