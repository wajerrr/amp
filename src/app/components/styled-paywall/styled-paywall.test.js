import React from 'react';
import renderer from 'react-test-renderer';
import { StyledPaywall, StyledRegwall } from './styled-paywall';

describe('Paywall and Regwall', () => {
  it('should match the snapshot for the Regwall', () => {
    const paywall = renderer.create(<StyledRegwall />).toJSON();
    expect(paywall).toMatchSnapshot();
  });
  it('should match the snapshot for the Paywall', () => {
    const paywall = renderer.create(<StyledPaywall />).toJSON();
    expect(paywall).toMatchSnapshot();
  });
});
