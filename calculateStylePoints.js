const calculateStylePoints = (styleNotes) => {
    //check entered data 
    if( styleNotes.length != 5  || (
    typeof styleNotes[0] != 'number' ||  typeof styleNotes[1] != 'number' ||
    typeof styleNotes[2] != 'number' ||  typeof styleNotes[3] != 'number' ||
    typeof styleNotes[4] != 'number') )
        return 'WRONG DATA !!!';

    //create variables
    let points = 0;
    
    //calculating
    styleNotes.sort();
    for( let i = 1; i < 4; i++ )
        points += styleNotes[i]
    
    return points;
  };

//console.log( calculateStylePoints( [  16, 17, 16.5, 16, 18 ] ) );
  
module.exports = calculateStylePoints;