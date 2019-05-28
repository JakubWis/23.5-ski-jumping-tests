const calculateDistancePoints = (distance, hillSize, kPoint) => {
    //check entered data 
    if( (hillSize != 'normal' && hillSize != 'big' && hillSize != 'mammoth') ||
    typeof distance != 'number'  || typeof kPoint != 'number' )
        return 'WRONG DATA !!!'

    //create variables
    let startingPoints, points, converter;

    //checking hill size
    hillSize == 'mammoth' ? startingPoints=120 : startingPoints=60;

     hillSize == 'mammoth' ? converter = 1.2 :
     hillSize == 'big' ? converter = 1.8 :
      converter = 2; //normal

    //calculating
    distance >= kPoint ? 
        points = startingPoints + ( distance - kPoint ) * converter:
        points = startingPoints - ( kPoint - distance ) * converter
    
    return points;
  };

//console.log(calculateDistancePoints( 90, 'big', 99));

module.exports = calculateDistancePoints;