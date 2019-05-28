const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('few test with real data', () => {
        it('TEST 1, on mammoth hill', () => {
            const actual = calculateTotalPoints(227.5, 'mammoth', 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7)

            const expected = 208.3;

            assert.equal(actual, expected)
        })

        it('TEST 2, on mammoth hill', () => {
            const actual = calculateTotalPoints(226.0, 'mammoth', 200, [18.5, 18.5, 18.5, 18.0, 18.5], -8.9, 8.7)

            const expected = 206.5;

            assert.equal(actual, expected)
        })

        it('TEST 3, on normal hill', () => {
            const actual = calculateTotalPoints(111.0, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], -14.4, 3.2)

            const expected = 131.8;

            assert.equal(actual, expected)
        })

        it('checks if data is wrong', () => {
            const actual = calculateTotalPoints(111.0, 'normaloo', 98, [19.0, 19.5, 19.0, 19.0, 19.0], -14.4, 3.2)

            const expected = 'WRONG DATA !!!';

            assert.equal(actual, expected)
        })
    })
})

