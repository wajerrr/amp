import fontFace from '@economist/component-typography/lib/font-face-absolute';
import { injectGlobal } from 'emotion';

export default function injectFontFace() {
  return injectGlobal`${fontFace}`;
}
