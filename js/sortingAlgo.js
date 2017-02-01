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

  //Selection sort
  this.selectionSort = function() {
    
    var length = array.length;
    var indexMin;
    for(var i = 0; i < length-1; i++) {
      indexMin = i;
      
      for(var j = i; j <length; j++) {
        if(array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if(i !== indexMin) {
        swap(array, i, indexMin);
      }
    }
  };

  // Insertion sort
  this.insertionSort = function() {
    
    // hold the length
    var length = array.length;
    var j;
    var temp;

    //loop through.. starting by the second element (i = 1)
    for(var i = 1; i < length; i++) {
      j = i;
      //the temprary element in the array
      temp = array[i];
      
      //while loop to find the right spot (while the element before is greater than our element)
      while(j > 0 && array[j-1] > temp) {
        //bring the element before and place it after
        array[j] = array[j-1];
        //move one step before
        j--;
      }
      array[j] = temp;
    }
  };

  // Merge sort
  this.mergeSort = function() {
    array = mergeSortRec(array);
  };

  //helper func to break down the array into its half 
  var mergeSortRec = function(array) {
    var length = array.length;

    //check if the array containes single element => if it is then it's sorted
    if(length === 1) {
      return array;
    } else{
    
    //store the half-length of the array
    var mid = Math.floor(length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, length);
    
    //return the merged sorted left and the merged sorted right
    return merge(mergeSortRec(left), mergeSortRec(right));
    }
  };

  //helper func to merge out the broken down Arrays
  var merge = function(left, right) {

  	//creat an array to hold the result
    var result = [];
    
    //create vars to hold the i in left and right
    var il = 0;
    var ir = 0;
    
    //loop using while in both of the arrays at once
    while(il < left.length && ir < right.length) {
      //check which one is smaller and place first
      if(left[il] < right[ir]) {
        result.push(left[il]);
        il++;
      }
      else {
        result.push(right[ir]);
        ir++;
      }
    }

    //new wile for the remaining item could be at left or right
    while(il < left.length) {
      result.push(left[il]);
      il++;
    }
    
    while(ir < right.length) {
      result.push(right[ir]);
      ir++;
    }
    
    return result;
  };

  // quickSort
  this.quickSort = function() {
    quick(array, 0, array.length - 1);
  };

  // helper method for the quickSort ((quick))
  var quick = function(array, left, right) {
    
    var index;
    
    if(array.length > 1 ) {
      
      index = partition(array, left, right);
      
      if(left < index - 1) {
        quick(array, left, index - 1);
      }
      
      if(index < right) {
        quick(array, index, right);
      }
    }
  };

  //helper method for the quickSort ((partition))
  var partition = function(array, left, right) {

  	var pivot = array[Math.floor((left + right) / 2)];
    
    var i = left;
    var j = right;
    
    while(i <= j) {
      while(array[i] < pivot) {
        i++;
      }
      while(array[j] > pivot) {
        j--;
      }
      if(i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  };
  //===========================================================================

  //heapSort
  this.heapSort = function() {
    
    //get the length
    var heapSize = array.length;
    
    //build the tree through calling the helper method
    buildHeap(array);
    
    //
    while(heapSize > 1) {
      //less the size of the array 
      heapSize--;
      
      //swap the first and the last items
      swap(array, 0, heapSize);
      heapify(array, heapSize, 0);
    }
  };