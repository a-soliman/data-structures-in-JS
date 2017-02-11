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


LinkedList.prototype.size = function() {
  if(!this.head) {
    return 0;
  }
  else {
    var currentNode = this.head;
    var size = 0;
    while(currentNode) {
      size++;
      currentNode = currentNode.next;
    }
  }
  return size;
};


LinkedList.prototype.isEmpty = function() {
  if(!this.head) {
    return true;
  }
  else if(this.head) {
    return false;
  }
};

LinkedList.prototype.removeHead = function() {
  if(!this.head) {
    return false;
  }
  else{
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head) {
      this.head.prev = null;
    }
    else{ 
      this.tail = null;
    }
  }
  return val;
};

LinkedList.prototype.removeTail = function() {
  if(this.tail) {
    return false;
  }
  else {
    var val = this.tail.value;
    this.tail = this.tail.prev;
    
    if(this.tail) {
      this.tail.next = null;
    }
    else {
      this.head = null;
    }
  }
  return val;
};


LinkedList.prototype.search = function(searchedValue) {
  if(!this.head) {
    return false;
  }
  else {
    var currentNode = this.head;
    
    while(currentNode) {
      if(searchedValue === currentNode.value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
};


LinkedList.prototype.indexOf = function(value) {
  if(!this.value) {
    return false;
  }
  else {
    var currentNode = this.head;
    var indexs = [];
    var currentIndex = 0;
    
    while(currentNode) {
      if(value === currentNode.value) {
        indexs.push(currentIndex);
      }
      currentIndex++;
      currentNode = currentNode.next;
    }
  }
  return indexs;
};


LinkedList.prototype.print = function() {
  if(!this.head) {
    return false;
  }
  else {
    var items = [];
    var currentNode = this.head;
    
    while(currentNode) {
      items.push(currentNode.value);
      
      currentNode = currentNode.next;
    }
  }
  return items.toString();
};
//=========================================================
//=========================================================


