// www.openmind.com => ALGO
// Linear Search
function findIndex(array, target) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] === target) {
      return i;
    }
  }
  return false;
}
findIndex([7, 3, 6, 1,0], 6);
