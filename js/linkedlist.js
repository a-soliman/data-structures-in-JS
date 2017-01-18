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

// print method
LinkedList.prototype.print = function() {
  var items = [];
  
  var currentNode = this.head;
  while(currentNode) {
    items.push(currentNode.value)
    
    currentNode = currentNode.next;
  }
  return items.toString();
};

//removeAt any specific position
LinkedList.prototype.removeAt = function(index) {
  var val;
  
  if(index === 0 ) {
    val = this.head.value;
    this.removeHead();
  }
  else if(index === this.size() -1) {
    val = this.tail.value;
    this.removeTail();
  }
  else {
    var currentNode = this.head;
    var currentIndex =0;
    var prevNode;
    var nextNode;
    
    while(currentNode) {
      if(index === currentIndex) {
        val = currentNode.value
        prevNode = currentNode.prev;
        nextNode = currentNode.next;
        
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
  return val;
}

// insertAt method to add an element at a spesific index
LinkedList.prototype.insertAt = function(index, value) {
  //if the index is the head
  if(index === 0) {
    this.addToHead(value);
  }
  //if the index is the tail
  else if(index === this.size() -1) {
    this.addToTail(value);
  }
  //otherwise
  else{
    var newNode;
    var prevNode;
    var currentNode = this.head;
    var currentIndex = 0;
    
    while(currentNode) {
     if(index === currentIndex) {
       prevNode = currentNode.prev;
       newNode = new Node(value, currentNode, prevNode)
       prevNode.next = newNode;
       currentNode.prev = newNode;
     }
     
     currentNode = currentNode.next;
     currentIndex++;
    }
  }
};
