const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiHttp);

describe('unix timestamp parsing', () => {

    it('response has a unix and natural property', (done) => {
        const validUnix = 631161907000; // Mon Jan 01 1990 13:45:07 GMT+1100 (AEDT)
        chai.request(server)
            .get(`/${validUnix}`)
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('unix');
                expect(res.body).to.have.property('natural');
                done();
            })
    })

    it('returns correct natural date from unix timestamp', (done) => {
        const validUnix = 631161907000; // Mon Jan 01 1990 13:45:07 GMT+1100 (AEDT)
        const expect = 'January 1, 1990'

        chai.request(server)
            .get(`/${validUnix}`)
            .end(function (err, res) {
                assert.equal(res.body.natural, expect)
                assert.equal(res.body.unix, validUnix)
                done();
            })
    })
    it('returns correct natural timestamp for 01 Jan 1990', (done) => {
        const test = 'January 1, 1990'; // Mon Jan 01 1990 13:45:07 GMT+1100 (AEDT)
        const expect = 'January 1, 1990'
        chai.request(server)
            .get(`/${test}`)
            .end(function (err, res) {
                // assert.equal(res.body.natural, expect)
                assert.equal(res.body.natural, expect)
                done();
            })
    })
    it('returns correct unix timestamp for 631161907000', (done) => {
        const test = 631161907000; // Mon Jan 01 1990 13:45:07 GMT+1100 (AEDT)
        const expect = 'January 1, 1990'

        chai.request(server)
            .get(`/${test}`)
            .end(function (err, res) {
                assert.equal(res.body.unix, test)
                assert.equal(res.body.natural, expect)
                done();
            })
    })

    it('returns NULL to an INVALID unix timestamp', (done) => {
        const invalidUnix = '0sdf0101sdf'; // Mon Jan 01 1990 13:45:07 GMT+1100 (AEDT)
        chai.request(server)
            .get(`/${invalidUnix}`)
            .end(function (err, res) {
                assert.equal(res.body.unix, null)
                assert.equal(res.body.natural, null)
                done();
            })
    })
})
