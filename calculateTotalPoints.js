const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  //check entered data 
  if ( typeof distancePoints != 'number' || 
  typeof stylePoints != 'number' || 
  typeof windFactor != 'number' ||
  typeof gateFactor != 'number' )
    return 'WRONG DATA !!!';

  return (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1);
}

console.log( calculateTotalPoints( 90, 'normal', 87, [ 12, 13.5, 14, 13, 12 ], 12, -2 ) );

module.exports = calculateTotalPoints;