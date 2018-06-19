import React from 'react';
import styled from 'react-emotion';
import { color, fontFamily, text, spacings } from '../../styles/';
import getUrl from '../../../server/utils/get-url';

const StyledPopupOverlay = styled('div')`
  -webkit-font-smoothing: antialiased;
`;

const StyledConsentPopup = styled('div')`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: start;
  justify-content: center;
  box-sizing: border-box;
  margin-top: ${spacings.m};
  padding: ${spacings.m};
  background-color: #95ffff;
`;

const StyledText = styled('div')`
  display: block;
  color: ${color.beijing};
  margin: ${spacings.none} ${spacings.s} ${spacings.none} ${spacings.none};
  font-family: ${fontFamily.sans};
  font-size: ${text.sizeStep[-1]};
`;

const StyledLink = styled('a')`
  &,
  &:active,
  &:visited {
    color: ${color.beijing};
  }
`;

const StyledAcceptButton = styled('button', {
  shouldForwardProp: () => true,
})`
  position: relative;
  display: inline-block;
  border: ${spacings.none};
  padding: ${spacings.none} ${spacings.xl};
  background: ${color.chicago};
  color: ${color.thimphu};
  cursor: pointer;
  border-radius: 4px;
  font-size: ${text.sizeStep[-1]};
  font-family: ${fontFamily.sans};
  line-height: 30px;
`;

/* eslint-disable react/no-danger */
const UserConsent = () => (
  <amp-consent id="UserConsent" layout="nodisplay">
    <script
      type="application/json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          consents: {
            userConsent: {
              checkConsentHref: getUrl('/check_consent.json'),
              promptUI: 'consentDialog',
            },
          },
        }),
      }}
    />
    <StyledPopupOverlay className="popupOverlay" id="consentDialog">
      <StyledConsentPopup>
        <StyledText>
          Our site uses cookies to deliver relevant messages during your visit,
          such as presenting our latest offers and allowing easier access for
          subscribers. To receive the best experience, please allow cookies.
          View our{' '}
          <StyledLink
            href="https://www.economist.com/cookies-info"
            target="_blank"
          >
            cookie policy
          </StyledLink>{' '}
          or{' '}
          <StyledLink
            href="https://l3.evidon.com/site/2254/668/6?lang=en"
            target="_blank"
          >
            manage your cookies
          </StyledLink>
          .
        </StyledText>
        <StyledAcceptButton
          on="tap:UserConsent.accept"
          className="ampstart-btn ampstart-btn-secondary caps mx1"
        >
          Accept
        </StyledAcceptButton>
      </StyledConsentPopup>
    </StyledPopupOverlay>
  </amp-consent>
);

export default UserConsent;
