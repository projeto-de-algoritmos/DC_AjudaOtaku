const payload = require('./utils/payload')

const expect = require('chai').expect,
server = require('../../server'),
request = require('supertest')(server);

describe('Contagem de Inversão', () => {
    it('Deve realizar a contagem de inversão com sucesso - @integration', (done) => {
        request.post('/api/inversions').set('Accept', 'application/json').send(payload.validInversions.request).end((err, response) => {
            if (err) done(err);
            expect(response.body).to.deep.equal(payload.validInversions.response); 
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

