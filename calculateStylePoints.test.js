const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('checking few other options', () => {
        it('should check if all variables in array are numbers', () => {
            const actual = calculateStylePoints([  16, 17, 16.5, '1asd2', 18 ])

            const expected = 'WRONG DATA !!!';

            assert.equal(actual, expected)
        })

        it('should check if there are 5 variables given', () => {
            const actual = calculateStylePoints([  16, 17, 12, 18 ])

            const expected = 'WRONG DATA !!!';

            assert.equal(actual, expected)
        })
        
        it('real judges marks TEST1', () => {
            const actual = calculateStylePoints([ 17.0, 17.0, 16.5, 17.0, 17.0 ])

            const expected = 51;

            assert.equal(actual, expected)
        })

        it('real judges marks TEST2', () => {
            const actual = calculateStylePoints([ 16.5, 16.0, 16.5, 16.5, 16.0 ])

            const expected = 49;

            assert.equal(actual, expected)
        })

        it('real judges marks TEST3', () => {
            const actual = calculateStylePoints([ 19.0, 20.0, 19.5, 19.0, 18.5 ])

            const expected = 57.5;

            assert.equal(actual, expected)
        })
    })
})