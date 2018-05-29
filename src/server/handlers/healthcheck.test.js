import config from '../config/base-config';
import { gigabitInBytes, status, listEnvVariables } from './healthcheck';
import server from '../server';

const mockMeemoryUsage = 1000;

process.memoryUsage = jest.fn(() => ({ rss: mockMeemoryUsage }));

const mockCommit = 'iamcurrentcommithash';

jest.mock('child_process', () => ({
  execSync: jest.fn().mockImplementation(() => mockCommit),
}));

describe('healthcheck handler', async () => {
  beforeAll(async (done) => {
    await server.start();
    done();
  });

  afterAll(async (done) => {
    await server.stop();
    done();
  });

  beforeEach(() => {
    process.memoryUsage.mockClear();
  });

  it('should return correct data for dev enviroment', async (done) => {
    const response = await server.inject({
      method: 'GET',
      url: '/healthcheck',
    });
    const expectedResult = {
      buildNumber: 'only in production',
      last_commit: 'only in production',
      messages: listEnvVariables(process.env),
      name: config.name,
      status,
      version: config.version,
      memoryUsage: mockMeemoryUsage / gigabitInBytes,
    };
    expect(response.statusCode).toEqual(status);
    expect(response.result).toEqual(expectedResult);
    done();
  });
  // TODO: figure out how to simulate production enviroment.
});
