/* DO NOT MODIFY. Copied from component-typography/src/font-face.css */
import { injectGlobal } from 'emotion';

export default function injectFontFace() {
  return injectGlobal`
/* stylelint-disable value-keyword-case */
/* too many components refer to EconSans */

/* Primary subset fonts (aA-zZ 0-9 etc). */

@font-face {
    font-display:swap;
    font-family: EconSans;
    font-weight: 300;
    src: 
      url('https://www.economist.com/assets/econsans-subset-lt.woff2') format('woff2'),
      url('https://www.economist.com/assets/econsans-subset-lt.woff') format('woff');
}

@font-face {
    font-display:swap;
    font-family: EconSans;
    font-style: normal;
    src: 
      url('https://www.economist.com/assets/econsans-subset-rg.woff2') format('woff2'),
      url('https://www.economist.com/assets/econsans-subset-rg.woff') format('woff');
}

@font-face {
    font-display:swap;
    font-family: EconSans;
    font-style: italic;
    src: 
      url('https://www.economist.com/assets/econsans-subset-it.woff2') format('woff2'),
      url('https://www.economist.com/assets/econsans-subset-it.woff') format('woff');
}

@font-face {
    font-display:swap;
    font-family: EconSans;
    font-weight: 500;
    src: 
      url('https://www.economist.com/assets/econsans-subset-md.woff2') format('woff2'),
      url('https://www.economist.com/assets/econsans-subset-md.woff') format('woff');
}

@font-face {
    font-display:swap;
    font-family: EconSans;
    font-weight: 700;
    src: 
      url('https://www.economist.com/assets/econsans-subset-bd.woff2') format('woff2'),
      url('https://www.economist.com/assets/econsans-subset-bd.woff') format('woff');
}

@font-face {
    font-display:swap;
    font-family: MiloSerifPro;
    font-style: normal;
    src: 
      url('https://www.economist.com/assets/milo-subset-rg.woff2') format('woff2'),
      url('https://www.economist.com/assets/milo-subset-rg.woff') format('woff');
}

@font-face {
    font-display:swap;
    font-family: MiloSerifPro;
    font-style: italic;
    src: 
      url('https://www.economist.com/assets/milo-subset-it.woff2') format('woff2'),
      url('https://www.economist.com/assets/milo-subset-it.woff') format('woff');
}

@font-face {
    font-display:swap;
    font-family: MiloSerifPro;
    font-weight: 500;
    src: 
      url('https://www.economist.com/assets/milo-subset-md.woff2') format('woff2'),
      url('https://www.economist.com/assets/milo-subset-md.woff') format('woff');
}

@font-face {
    font-display:swap;
    font-family: MiloSerifPro;
    font-weight: 700;
    src: 
      url('https://www.economist.com/assets/milo-subset-bd.woff2') format('woff2'),
      url('https://www.economist.com/assets/milo-subset-bd.woff') format('woff');
}`;
}
