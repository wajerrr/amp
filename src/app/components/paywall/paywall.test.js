import React from 'react';
import renderer from 'react-test-renderer';
import Paywall from './paywall';
import regwallData from '../../data/regwall-data';
import paywallData from '../../data/paywall-data';

describe('Paywall', () => {
  it('should match the snapshot for regwall data', () => {
    const paywall = renderer.create(<Paywall data={regwallData} />).toJSON();
    expect(paywall).toMatchSnapshot();
  });
  it('should match the snapshot for paywall data', () => {
    const paywall = renderer.create(<Paywall data={paywallData} />).toJSON();
    expect(paywall).toMatchSnapshot();
  });
});
