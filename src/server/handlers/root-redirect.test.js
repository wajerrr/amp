import economistConfig from '../config/economist';
import server from '../server';

describe('root-redirect handler', async () => {
  beforeAll(async (done) => {
    await server.start();
    done();
  });

  afterAll(async (done) => {
    await server.stop();
    done();
  });

  it('should redirect from /', async (done) => {
    const response = await server.inject({
      method: 'GET',
      url: '/',
    });
    expect(response.statusCode).toEqual(302);
    expect(response.headers.location).toEqual(
      `https://${economistConfig.domain}`
    );
    done();
  });
});
