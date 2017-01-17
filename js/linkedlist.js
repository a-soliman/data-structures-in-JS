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

