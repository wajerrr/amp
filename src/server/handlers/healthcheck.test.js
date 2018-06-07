import config from '../config/base-config';
import {
  gigabitInBytes,
  status,
  listEnvVariables,
  handler,
} from './healthcheck';

const mockMeemoryUsage = 1000;

process.memoryUsage = jest.fn(() => ({ rss: mockMeemoryUsage }));

const mockCommit = 'iamcurrentcommithash';

jest.mock('child_process', () => ({
  execSync: jest.fn().mockImplementation(() => mockCommit),
}));

const h = {
  response: jest.fn().mockImplementation(() => h),
  header: jest.fn().mockImplementation(() => h),
  code: jest.fn().mockImplementation(() => h),
};

describe('healthcheck handler', () => {
  beforeEach(() => {
    h.header.mockClear();
    h.code.mockClear();
    h.response.mockClear();
  });
  it('should return correct data for dev enviroment', async (done) => {
    handler(null, h);
    const expectedResult = {
      buildNumber: 'only in production',
      last_commit: 'only in production',
      messages: listEnvVariables(process.env),
      name: config.name,
      status,
      version: config.version,
      memoryUsage: mockMeemoryUsage / gigabitInBytes,
    };
    expect(h.code).toHaveBeenCalledTimes(1);
    expect(h.code).toHaveBeenCalledWith(200);

    expect(h.response).toHaveBeenCalledTimes(1);
    expect(h.response).toHaveBeenCalledWith(expectedResult);

    expect(h.header).toHaveBeenCalledTimes(2);
    expect(h.header).toHaveBeenCalledWith(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    expect(h.header).toHaveBeenCalledWith(
      'Cache-Control',
      'max-age=0, must-revalidate'
    );

    done();
  });
  // TODO: figure out how to simulate production enviroment.
});
