import React from 'react';
import renderer from 'react-test-renderer';
import { Paywall, Regwall } from './paywall';

describe('Paywall', () => {
  it('should match the snapshot for regwall', () => {
    const paywall = renderer.create(<Regwall />).toJSON();
    expect(paywall).toMatchSnapshot();
  });
  it('should match the snapshot for paywall', () => {
    const paywall = renderer.create(<Paywall />).toJSON();
    expect(paywall).toMatchSnapshot();
  });
});
