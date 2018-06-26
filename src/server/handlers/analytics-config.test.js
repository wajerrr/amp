import route from './analytics-config';

const { handler } = route;
const h = {
  response: jest.fn().mockImplementation(() => h),
};

describe('analytics config handler', () => {
  beforeEach(() => {
    h.response.mockClear();
  });

  it('should return config', () => {
    handler({ state: {} }, h);
    expect(h.response).toHaveBeenCalledTimes(1);
  });
});
