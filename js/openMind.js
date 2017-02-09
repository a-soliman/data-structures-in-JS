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


//========================================================================================
// Linked Lists
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
  var newNode = new Node(value, this.head, null);
  
  if(this.head) {
    this.head.prev = newNode;
  }
  else {
    this.tail = newNode;
  }
  this.head = newNode;
}


LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  
  if(this.tail) {
    this.tail.next = newNode;
  }
  else {
    this.head = newNode;
  }
  this.tail = newNode;
};

