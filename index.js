
// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    // absolute value of a number is the distance from the number to zero  along a number line 
    return Math.abs(someValue-42);
  }

function distanceFromHqInFeet(blocks) {

    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start,destination){
    return Math.abs((destination-start)*264)

}

function calculatesFarePrice(start, destination)
{
 let distance = distanceTravelledInFeet(start,destination);
 if(distance < 400 ){
    // first 400 feets are   free 
    return 0;
 }else if (distance>400 && distance <= 2000)
 { 
    // charges 2 cents per foot when total feet travelled  is btwn 400 and 2000
    return 0.02 * (distance-400);
 }else if(distance>2000 && distance<=2500)
 {  // charges 25 dollars for a distance over 2000 feet
    return 25;
}
else {
    // does not allow rides over 2500 feet
    return "cannot travel that far";
}
}

