const user = require('../../models/user');
// const request = require('supertest');
const bcrypt = require('bcryptjs');

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

    bcrypt.compare(data.access_token, tokenData.access_token, function(err, res) {
      expect(res).toBeTruthy();
    });

    bcrypt.compare(data.refresh_token, tokenData.refresh_token, function(err, res) {
      expect(res).toBeTruthy();
    });

  });

});