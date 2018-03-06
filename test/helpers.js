const chai = require('chai');
const parseDate = require('../helpers');
const assert = chai.assert;


describe('parse Date', () => {
    it('returns the correct natural date', () => {
        const expect = 'January 1, 1990';
        const result = parseDate('January 1, 1990');

        assert.equal(result.natural, expect)
    }) 
    it('returns the correct natural date', () => {
        const expect = 'January 1, 1990';
        const result = parseDate('1 January, 1990');

        assert.equal(result.natural, expect)
    }) 
    it('returns the correct natural date from a unix', () => {
        const expect = 'January 1, 1990';
        const result = parseDate('631112400000');

        assert.equal(result.natural, expect)
    }) 
    it('returns the correct unix date from natural', () => {
        const expect = '631112400000';
        const result = parseDate('1 January, 1990');

        assert.equal(result.unix, expect)
    }) 
    it('returns null for an invalid date', () => {
        const expect = null;
        const result = parseDate('sdf01587');

        assert.equal(result.unix, expect)
        assert.equal(result.natural, expect)
    }) 
})