import { handler } from './authorization';
import availableArticles from '../config/available-articles';
import mockGetUserData from '../auth0/get-userdata';

const mockRequest = {
  state: {},
  query: { url: 'https://amp.e.com/article' },
};

jest.mock('../auth0/get-userdata', () =>
  jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve({ 'http://economist.com/accessLevelCode': 1 })
    )
);

describe('authorization handler', () => {
  beforeEach(() => {
    mockGetUserData.mockClear();
    mockGetUserData.mockImplementation(() =>
      Promise.resolve({
        'http://economist.com/accessLevelCode': 1,
      })
    );
  });
  it('should provide access to free articles', async (done) => {
    const result = await handler({
      state: {
        ec_amp_visits: {
          article1: new Date(Date.now() - 10000),
        },
      },
      query: { url: `https://amp.e.com${availableArticles[0]}` },
    });

    expect(result.access).toEqual(1);
    done();
  });
  it('should return userGroup for new visitor', async (done) => {
    const result = await handler(mockRequest);
    expect(result.userGroup).toEqual('anonymous');
    done();
  });
  it('should return userGroup for anonymous', async (done) => {
    const result = await handler(
      Object.assign(mockRequest, {
        state: {},
      })
    );
    expect(result.userGroup).toEqual('anonymous');
    done();
  });
  it('should return userGroup for registered', async (done) => {
    const result = await handler(
      Object.assign(mockRequest, {
        state: { access_token: 'access_token' },
      })
    );
    expect(result.userGroup).toEqual('registered');
    done();
  });
  it('should return userGroup for subscriber', async (done) => {
    mockGetUserData.mockImplementation(() =>
      Promise.resolve({ 'http://economist.com/accessLevelCode': 2 })
    );
    const result = await handler(
      Object.assign(mockRequest, {
        state: { access_token: 'access_token' },
      })
    );
    expect(result.userGroup).toEqual('subscriber');
    done();
  });
  it('should provide access to article which has been visited this week', async (done) => {
    const result = await handler(
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
    done();
  });
  it('should provide access to one article for anonymous', async (done) => {
    const result = await handler(
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
    done();
  });
  it('should reject access to second article for anonymous', async (done) => {
    const result = await handler(
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
    done();
  });
  it('should provide access to three articles for registered user', async (done) => {
    mockGetUserData.mockImplementation(() =>
      Promise.resolve({ 'http://economist.com/accessLevelCode': 1 })
    );
    const result = await handler(
      Object.assign(mockRequest, {
        state: {
          access_token: 'access_token',
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
    done();
  });
  it('should reject access to 4-th article for registered user', async (done) => {
    const result = await handler(
      Object.assign(mockRequest, {
        state: {
          access_token: 'access_token',
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
    done();
  });
  it('should provide access to unlimited articles for subscriber', async (done) => {
    mockGetUserData.mockImplementation(() =>
      Promise.resolve({ 'http://economist.com/accessLevelCode': 2 })
    );
    const result = await handler(
      Object.assign(mockRequest, {
        state: {
          access_token: 'access_token',
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
    done();
  });
});
