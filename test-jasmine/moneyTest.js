import { fromatCurrency } from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(fromatCurrency(2095)).toEqual('20.95');
  });

  it('woks with 0', () => {
    expect(fromatCurrency(0)).toEqual('0.00');
  });

  it('round upto nearset cents', () => {
    expect(fromatCurrency(2000.5)).toEqual('20.01');
  });
});