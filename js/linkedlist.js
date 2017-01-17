// linked list constructor function
function LinkedList() {
	this.head = null;
	this.tail = null;
}

// Node constructor function
function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

// isEmpty to check if the LinkedList is EMPTY
LinkedList.prototype.isEmpty = function() {
  if(this.head) {
    return false;
  }
  return true;
};

// size method o return the lengeth if the list 
LinkedList.prototype.size = function() {
  if(!this.head) {
    return null;
  }
  else {
    var currentNode = this.head;
    var size = 0;
    
    while(currentNode) {
      currentNode = currentNode.next;
      size++;
    }
  }
  return size;
};


// adding a head node through the prototype
LinkedList.prototype.addToHead = function(value) {
	var newNode = new Node(value,this.head, null);
	//checking if the list is NOT EMPTY
	if(this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}
	this.head = newNode;
};


// adding a tail node through the prototype
LinkedList.prototype.addToTail = function(value) {
	var newNode = new Node(value, null, this.tail);
	//checking if the list isn't empty
	if(this.tail) {
		this.tail.next = newNode;
	} else {
		this.head = newNode;
	}
	this.tail = newNode;
};

//Remove head and return its value
LinkedList.prototype.removeHead =function() {
  if(!this.head) {
    return null;
  } else {
    var val = this.head.value;
    this.head = this.head.next;
    
    if(this.head) {
      this.head.prev = null;
    } else{
      this.tail = null;
    }
  }
  return val;
};

//Remove tail and return its value
LinkedList.prototype.removeTail = function() {
  if(!this.tail) {
    return nul;
  } else {
    var val = this.tail.val;
    this.tail = this.tail.prev;
    
    if(this.tail) {
      this.tail.next = null;
    } else{
      this.head = null;
    }
  }
  return val;
};

//Search the LinkedList
LinkedList.prototype.search = function(serchedValue) {
  var currentNode = this.head;
  
  while(currentNode) {
    if(currentNode.value === serchedValue) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;
};

//find index index of an element
LinkedList.prototype.indexOf = function(value) {
  if(!this.head) {
    return null;
  } else {
    var currentNode = this.head;
    var currentIndex = 0;
    var indexes = [];
    
    while(currentNode) {
      if(currentNode.value === value) {
        indexes.push(currentIndex);
      }
      
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
  return indexes;
};
