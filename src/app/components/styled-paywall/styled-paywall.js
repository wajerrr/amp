import React from 'react';
import { css } from 'emotion';
import { Paywall, Regwall } from '../paywall/paywall';
import color from '../../styles/color';
import fontFamily from '../../styles/font-family';
import spacings from '../../styles/spacings';
import { text } from '../../styles';
import sizes from '../../styles/icon-sizes';

const wrapperStyles = css`
  position: relative;
  box-sizing: border-box;
  padding-bottom: ${spacings.s};
  background-color: ${color.berlin};
  font-family: ${fontFamily.serif};
  margin-bottom: ${spacings.l};
`;
const sectionStyles = css`
  height: 50px;
  box-sizing: border-box;
  font-size: ${text.sizeStep['-1']};
  line-height: 1;
  text-align: center;
  background-color: ${color.thimphu};
  max-width: none;
  width: 100%;
  color: ${color.kiev};
  font-family: ${fontFamily.sans};
  & a {
    border: none;
    color: ${color.kiev};
    font-weight: bold;
    &:visited {
      color: ${color.chicago};
    }
  }
`;
const sectionContentStyles = css`
  line-height: 2;
`;
const headerStyles = css`
  margin: 0 auto;
  text-align: center;
  max-width: 80%;
  padding-top: ${spacings.xs};
`;
const headerTitleStyles = css`
  font-size: ${text.sizeStep['5']};
  line-height: ${text.lineHeight.sansOnStep['5']};
  font-weight: 500;
  margin: ${spacings.m} 0;
`;
const headerTextStyles = css`
  font-size: ${text.sizeStep['-1']};
  font-weight: 400;
  line-height: 28px;
`;
const listWrapperStyles = css`
  max-width: 85%;
  box-sizing: border-box;
  margin: 0 auto;
`;
const listStyles = css`
  padding: ${spacings.none} ${spacings.s};
`;
const listItemStyles = css`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-size: ${text.sizeStep['-1']};
  line-height: 27.86px;
  padding-left: 30px;
  font-family: ${fontFamily.sans};
  letter-spacing: -0.025em;
  &:before {
    position: absolute;
    top: 4px;
    left: 0;
    content: '';
    width: ${sizes.xSmall}px;
    height: ${sizes.xSmall}px;
    background-image: url('https://i.piano.io/managedservices/theeconomist/tick-icon.png');
    background-repeat: no-repeat;
    background-size: auto;
  }
`;
const textStyles = css`
  max-width: 80%;
  margin: ${spacings.xl} auto;
  font-size: ${text.sizeStep['-1']};
`;
const imageWrapperStyles = css`
  max-width: 80%;
  margin: ${spacings.xl} auto;
`;
const subscribeButtonWrapperStyles = css`
  margin: 0 auto;
  max-width: 80%;
  & a {
    font-size: 16px;
  }
`;
const footerStyles = css`
  max-width: 80%;
  text-align: center;
  margin: ${spacings.xl} auto;
  font-family: ${fontFamily.sans};
  font-size: ${text.sizeStep['-1']};
  & a {
    border: none;
    &:visited {
      color: ${color.chicago};
    }
  }
`;

const paywallLoginTextButton = css`
  color: inherit;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 2px solid ${color.kosice};
  &:hover,
  &:visited {
    color: ${color.chicago};
    border-bottom-color: ${color.chicago};
  }
`;

const paywallButton = css``;

const styles = {
  section: sectionStyles,
  sectionContent: sectionContentStyles,
  paywallLoginTextButton,
  paywallButton,
  wrapper: wrapperStyles,
  header: headerStyles,
  headerTitle: headerTitleStyles,
  headerText: headerTextStyles,
  listWrapper: listWrapperStyles,
  list: listStyles,
  listItem: listItemStyles,
  text: textStyles,
  subscribeButtonWrapper: subscribeButtonWrapperStyles,
  imageWrapper: imageWrapperStyles,
  footer: footerStyles,
};

const StyledPaywall = () => <Paywall styles={styles} />;
const StyledRegwall = () => <Regwall styles={styles} />;

export { StyledPaywall, StyledRegwall };
