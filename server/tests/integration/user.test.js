const user = require('../../models/user');
// const request = require('supertest');

describe('user token auth', () => {
  let server; 

  beforeEach(() => { 
    server = require('../../server'); 
  })
  afterEach(async () => { 
    // await Genre.remove({});
    await server.close(); 
  });

  // let token; 

  // const exec = () => {
  //   return request(server)
  //     .post('/api/genres')
  //     .set('x-auth-token', token)
  //     .send({ name: 'genre1' });
  // }

  it('should save user token info to database', async () => {
    const data = {
      "access_token" : "APP_USR-6092-3246532-cb45c82853f6e620bb0deda096b128d3-8035443",
      "token_type" : "bearer",
      "expires_in" : 10800,
      "scope" : "write read",
      "refresh_token" : "REFRESH_APP_USR-6092-3246532-cb45c82853f6e620bb0deda096b128d3-8035443",
    }; 

    await user.saveMeliTokens(user, data);

    const tokenData = await user.getMeliTokens(user);

    expect(data.access_token).toEqual(tokenData.access_token);

    expect(data.refresh_token).toEqual(tokenData.refresh_token);

  });

  it('should retrieve user data', async () => {

    const userData = await user.getUserData(user);

    expect(userData).not.toBeUndefined();
  });

});