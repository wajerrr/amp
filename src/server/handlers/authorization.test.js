import { handler } from './authorization';
import availableArticles from '../config/available-articles';

const mockRequest = {
  state: {},
  query: { url: 'https://amp.e.com/article' },
};

describe('authorization handler', () => {
  it('should provide access to free articles', () => {
    const result = handler({
      state: {
        ec_user_type: 'anonymous',
        ec_amp_visits: {
          article1: new Date(Date.now() - 10000),
        },
      },
      query: { url: `https://amp.e.com${availableArticles[0]}` },
    });
    expect(result.access).toEqual(1);
  });
  it('should return userGroup for new visitor', () => {
    const result = handler(mockRequest);
    expect(result.userGroup).toEqual('anonymous');
  });
  it('should return userGroup for anonymous', () => {
    const result = handler(
      Object.assign(mockRequest, {
        state: { ec_user_type: 'anonymous' },
      })
    );
    expect(result.userGroup).toEqual('anonymous');
  });
  it('should return userGroup for registered', () => {
    const result = handler(
      Object.assign(mockRequest, {
        state: { ec_user_type: 'registered' },
      })
    );
    expect(result.userGroup).toEqual('registered');
  });
  it('should return userGroup for subscriber', () => {
    const result = handler(
      Object.assign(mockRequest, {
        state: { ec_user_type: 'subscriber' },
      })
    );
    expect(result.userGroup).toEqual('subscriber');
  });
  it('should provide access to article which has been visited this week', () => {
    const result = handler(
      Object.assign(mockRequest, {
        state: {
          ec_amp_visits: {
            article1: new Date(Date.now() - 10000),
          },
        },
        query: {
          url: 'https://amp.e.com/article',
          articleId: 'article1',
        },
      })
    );
    expect(result.access).toEqual(1);
  });
  it('should provide access to one article for anonymous', () => {
    const result = handler(
      Object.assign(mockRequest, {
        state: {
          ec_amp_visits: {},
        },
        query: {
          url: 'https://amp.e.com/article',
          articleId: 'article1',
        },
      })
    );
    expect(result.access).toEqual(1);
  });
  it('should reject access to second article for anonymous', () => {
    const result = handler(
      Object.assign(mockRequest, {
        state: {
          ec_amp_visits: {
            article1: new Date(Date.now() - 10000),
          },
        },
        query: {
          url: 'https://amp.e.com/article',
          articleId: 'article2',
        },
      })
    );
    expect(result.access).toEqual(0);
  });
  it('should provide access to three articles for registered user', () => {
    const result = handler(
      Object.assign(mockRequest, {
        state: {
          ec_user_type: 'registered',
          ec_amp_visits: {
            article1: new Date(Date.now() - 10000),
            article2: new Date(Date.now() - 10000),
          },
        },
        query: {
          url: 'https://amp.e.com/article',
          articleId: 'article3',
        },
      })
    );
    expect(result.access).toEqual(1);
  });
  it('should reject access to 4-th article for registered user', () => {
    const result = handler(
      Object.assign(mockRequest, {
        state: {
          ec_user_type: 'registered',
          ec_amp_visits: {
            article1: new Date(Date.now() - 10000),
            article2: new Date(Date.now() - 10000),
            article3: new Date(Date.now() - 10000),
          },
        },
        query: {
          url: 'https://amp.e.com/article',
          articleId: 'article4',
        },
      })
    );
    expect(result.access).toEqual(0);
  });
  it('should provide access to unlimited articles for subscriber', () => {
    const result = handler(
      Object.assign(mockRequest, {
        state: {
          ec_user_type: 'subscriber',
          ec_amp_visits: {
            article1: new Date(Date.now() - 10000),
            article2: new Date(Date.now() - 10000),
            article3: new Date(Date.now() - 10000),
          },
        },
        query: {
          url: 'https://amp.e.com/article',
          articleId: 'article4',
        },
      })
    );
    expect(result.access).toEqual(1);
  });
});
