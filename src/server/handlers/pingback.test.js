import { handler } from './pingback';
import availableArticles from '../config/available-articles';

const h = {
  state: jest.fn().mockImplementation(() => h),
};

describe('pingback handler', () => {
  beforeEach(() => {
    h.state.mockClear();
  });
  it('should save visit for anonymous user', () => {
    handler(
      {
        state: {},
        query: { url: `https://amp.e.com/article`, access: '1' },
      },
      h
    );
    expect(h.state).toHaveBeenCalledTimes(1);
  });
  it('should not save visit if access was rejected', () => {
    handler(
      {
        state: {},
        query: { url: `https://amp.e.com/article`, access: '0' },
      },
      h
    );
    expect(h.state).toHaveBeenCalledTimes(0);
  });
  it('should not save visit if user is subscriber', () => {
    handler(
      {
        state: {},
        query: {
          url: `https://amp.e.com/article`,
          access: '1',
          userGroup: 'subscriber',
        },
      },
      h
    );
    expect(h.state).toHaveBeenCalledTimes(0);
  });
  it('should not save visit if article is free', () => {
    handler(
      {
        state: {},
        query: {
          url: `https://amp.e.com${availableArticles[0]}`,
          access: '1',
        },
      },
      h
    );
    expect(h.state).toHaveBeenCalledTimes(0);
  });
});
