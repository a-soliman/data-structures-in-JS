// Algorithms Sorting
// creating an array list
function ArrayList() {
  var array = [];

  this.insert = function(item) {
    array.push(item);
  };

  this.toString = function() {
    return array.join();
  };

  //The bubble sort Algo
  this.bubbleSort = function() {

  	//store the size of the array
    var length = array.length;
    //loop through the array
    for(var i = 0; i <length; i++ ) {
      //loop once again using -1
      for(var j = 0; j <length -1; j++) {
        if(array[j] > array[j+1]) {
          swap(array, j, j+1);
        }
      }
    }
  };

  //swap function
  var swap = function(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };