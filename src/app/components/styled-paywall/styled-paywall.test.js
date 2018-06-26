import React from 'react';
import renderer from 'react-test-renderer';
import StyledPaywall from './styled-paywall';
import regwallData from '../../data/regwall-data';
import paywallData from '../../data/paywall-data';

describe('Paywall', () => {
  it('should match the snapshot for regwall data', () => {
    const paywall = renderer
      .create(<StyledPaywall data={regwallData} />)
      .toJSON();
    expect(paywall).toMatchSnapshot();
  });
  it('should match the snapshot for paywall data', () => {
    const paywall = renderer
      .create(<StyledPaywall data={paywallData} />)
      .toJSON();
    expect(paywall).toMatchSnapshot();
  });
});
