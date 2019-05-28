const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('propriety of entered data', () => {
        it('should check if hill size is well spelled', () => {
            const actual = calculateDistancePoints(12, "aaa", 21)

            const expected = 'WRONG DATA !!!';

            assert.equal(actual, expected)
        })

        it('should check if numbers are numbers', () => {

            const actual = calculateDistancePoints('12', "normal", 'oj')
            
            const expected = 'WRONG DATA !!!';

            assert.equal(actual, expected)
        })
    })
    describe('calcualtion', () => {
        it('should calculate well on normal hill', () => {            
            const actual = calculateDistancePoints( 107.5 , "normal",  98)

            const expected = 79;

            assert.equal(actual, expected)
        })

        it('should calculate well on big hill', () => {            
            const actual = calculateDistancePoints( 130.5 , "big",  120)

            const expected = 78.9;

            assert.equal(actual, expected)
        })

        it('should calculate well on mammoth hill', () => {            
            const actual = calculateDistancePoints( 226.5 , "mammoth",  200)

            const expected = 151.8;

            assert.equal(actual, expected)
        })

        it('should calculate well when somone has been given negative points', () => {            
            const actual = calculateDistancePoints( 195.0 , "mammoth",  200)

            const expected = 114;

            assert.equal(actual, expected)
        })
    })
})