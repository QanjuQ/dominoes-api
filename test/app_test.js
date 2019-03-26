const session = require('supertest-session');
const app = require('../app.js');

describe.skip("AppTest",()=>{
    let testSession = null;
 
    beforeEach(function () {
        testSession = session(app);
    });

    describe('POST /create-game', function() {
        it('responds with json', function(done) {
            agent(app)
            .post('/create-game')
            .send({name:"anju",numberOfPlayers:2})
            .expect(200)
            .end((err, res) => {
              if (err) {
                return done(err);
              }
              expect(res.text).to.be.equal("game started and you joined it.");
              return done();
            });
        });
    });
});