import economistConfig from '../config/economist';
import { handler } from './root-redirect';

describe('root-redirect handler', () => {
  const h = {
    redirect: jest.fn().mockImplementation(() => h),
  };

  afterEach(() => {
    h.redirect.mockClear();
  });

  it('should redirect from /', () => {
    handler(null, h);
    expect(h.redirect).toHaveBeenCalledTimes(1);
    expect(h.redirect).toHaveBeenCalledWith(
      `https://${economistConfig.domain}`
    );
  });
});
