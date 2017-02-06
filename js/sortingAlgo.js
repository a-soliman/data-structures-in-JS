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

  //buildHeap method -> heloper function to heapSort
  var buildHeap = function(array) {
    //stor the length
    var heapSize = array.length;
    
    //loop to find out the last parent
    for(var i = Math.floor(array.length / 2 ); i >= 0; i--) {
      // call the heapify function
      heapify(array, heapSize, i);
    }
  };

  // heapify method -> helper function to heapSort
  var heapify = function(array, heapSize, i) {
    //set the variables
    var left = i * 2 + 1;
    var right = i * 2 + 2;
    var largest = i;

    // conditions to detrmain the heighest value
    if(left < heapSize && array[left] > array[largest]) {
      largest = left;
    }
    
    if(right < heapSize && array[right] > array[largest]) {
      largest = right;
    }
    
    if(largest !== i ) {
      
      //swap the vals
      swap(array, i, largest);
      //rehepify
      heapify(array, heapSize, i);
    }
  }

   //=========================================================================================
      //=== Algorithm Searching ===

      //sequentialSearch
  this.sequentialSearch = function(item) {
    //One Way
    // for(var i = 0; i < array.length; i++) {
    //   if(item = array[i]) {
    //     return true;
    //   }
    // }

    //other Way
    return item in array;
  }

  //binarySearch
  this.binarySearch = function(item) {
    
  }
  
};

//=========================================================================

/*
//creating an ArrayList 
function ArrayList() {
  this.array = [];
}

//an insert method
ArrayList.prototype.insert = function(item) {
  this.array.push(item);
};

//toString method
ArrayList.prototype.toString = function() {
  return this.array.join();
};


//the bubbleSort Algorithm
ArrayList.prototype.bubbleSort = function() {
  
  //store the length of the array 
  var length = this.array.length;
  
  //loop through the array
  for(var i = 0; i < length; i++) {
    for(var j = 0; j < length-1; j++) {
      if(this.array[j] > this.array[j+1]) {
        swap(this.array, j, j+1);
      }
    }
  }
};

//the selectionSort Algorithm
ArrayList.prototype.selectionSort = function() {
  // store the length
  var length = this.array.length
  //declare a var to hold the min 
  var indexMin;
  
  //loop through the array -1
  for(var i = 0; i <length-1; i++) {
    indexMin = i;
    
    for(var j = i; j < length; j++) {
      if(this.array[indexMin] > this.array[j]) {
        indexMin = j;
      }
    }
    if( i !== indexMin) {
      swap(this.array, i, indexMin);
    }
  }
};

//the insertionSort Algorithm
ArrayList.prototype.insertionSort = function() {
  var length = this.array.length;
  var j;
  var temp;
  
  //loop through starting by the position 1 ((assuming that the first position is sorted)
  for(var i = 1; i < length; i++) {
    //define j
    j = i;
    
    //define the temp element
    temp = this.array[i];
    
    //while the one before is greater than the current one
    while(j > 0 && this.array[j-1] > temp) {
      //shift the shift the one before
      this.array[j] = this.array[j-1];
      
      //minimize the j value
      j--;
    }
    this.array[j] = temp;
  }
};


// mergeSort
ArrayList.prototype.mergeSort = function() {
  array = mergeSortRec(this.array);
}



var mergeSortRec = function (array) {
  var length = array.length;
  
  if(length === 1) {
    
    return array;
  } 
  else {
    var med = Math.floor(length / 2);
    var left = array.slice(0, med);
    var right = array.slice(med, length);
    
    return merge(mergeSortRec(left), mergeSortRec(right));
  }
};


var merge = function(left, right) {
  var result = [];
  var il = 0;
  var ir = 0;
  
  while(il < left.length && ir < right.length) {
    if(left[il] < right[ir]) {
      result.push(left[il]);
      il++;
    } 
    else {
      result.push(right[ir]);
      ir++;
    }
  }

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
ArrayList.prototype.quickSort = function() {
  quick(this.array, 0, this.array.length-1);
};


//  quick => helper function to quickSort
var quick = function(array, left, right) {
  var index;
  
  if(array.length > 1) {
    index = partition(array, left, right);
    
    if(left < index-1) {
      quick(array, left, index-1);
    }
    if(index < right) {
      quick(array, index, right);
    }
  }
};


//   partition => helper function to quickSort
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


ArrayList.prototype.heapSort = function() {
  // get the length
  var heapSize = this.array.length;
  
  // call the builder to build the tree
  buildHeap(this.array);
  
  while(heapSize > 1) {
    
    // decrease the count
    heapSize--;
    
    //swap the first with the last
    swap(this.array, 0, heapSize);
    
    //call the heapify
    heapify(this.array, heapSize, 0);
  }
};

var buildHeap = function(array) {
  //get the length
  var heapSize = array.length;
  
  //loop using for to detrmain the last parent
  for(var i = Math.floor(array.length / 2); i >= 0; i--) {
    
    //call the heapify on the result
    heapify(array, heapSize, i);
  }
};

var heapify = function(array, heapSize, i) {
  var left = i * 2 + 1;
  var right = i * 2 + 2;
  var largest = i;
  
  if( left < heapSize && array[left] > array[largest]) {
    largest = left;
  }
  
  if( right < heapSize && array[right] > array[largest]) {
    largest = right;
  }
  
  if(largest !== i) {
    // swap them together
    swap(array, i, largest);
    heapify(array, heapSize, largest);
  }
};


*/
//===================================================================================================

var swap = function(array, index1, index2) {
  
  //store the pos 0
  var aux = array[index1];
  //switch the 1st and 2nd values
  array[index1] = array[index2];
  array[index2] = aux;
};

// === testing ===
function creatNonSortedArray(size) {
  var array = new ArrayList();
  for(var i =  size; i> 0; i--) {
    array.insert(i);
  }
  
  return array;
};


var array = creatNonSortedArray(5);
console.log(array.toString());

/*
// == testing bubbleSort ==
array.bubbleSort();
console.log(array.toString())
*/

/*
// == testing selectionSort == 
array.selectionSort();
console.log('Selection Sort : ', array.toString());
*/

/*
// == testing insertionSort == 
array.insertionSort();
console.log('Insertion Sort : ', array.toString());
*/

/*
array.mergeSort();
console.log('Merge Sort : ', array.toString());
*/

/*
array.quickSort();
console.log('Quick Sort : ', array.toString());
*/