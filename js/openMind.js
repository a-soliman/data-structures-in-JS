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

//HashTables
function HashTable(size) {
  this.buckets = array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  var total = 0;
  
  for(var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  
  return bucket;
};

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  
  if(!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  }
  else if(this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  else {
    var currentNode = this.buckets[index];
    
    while(currentNode.next) {
      if(currentNode.next.key === key) {
        currentNode.next.value = value;
        return
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value);
  }
}

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  
  if(!this.buckets[index]) {
    return false;
  }
  else {
    var currentNode = this.buckets[index];
    
    while(currentNode) {
      if(currentNode.key === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  return null;
};

HashTable.prototype.retriveAll = function() {
 
  var nodes = [];
  for(var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];
    
    while(currentNode) {
      nodes.push(currentNode);
      
      currentNode = currentNode.next;
    }
  }
  return nodes;
}

//====================================================================================================

// === Binary Search Tree ===
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if(value <= this.value) {
    if(!this.left) {
      this.left = new BST(value);
    }
    else {
      this.left.insert(value);
    }
  }
  else if(value > this.value) {
    if(!this.right) {
      this.right = new BST(value);
    }
    else {
      this.right.insert(value);
    }
  }
};

// contains
BST.prototype.containes = function(value) {
  if(value = this.value) {
    return true;
  }
  else if(value < this.value) {
    if(!this.left) {
      return false;
    }
    else {
      return this.left.containes(value);
    }
  }
  else if(value > this.value) {
    if(!this.right) {
      return false;
    }
    else {
      return this.right.containes(value);
    }
  }
}

BST.prototype.depthFirstTraversal = function(iterateFunc, order) {
  
  if(order === 'pre-order') {
    iterateFunc(this.value)
  }
  
  if(this.left) {
    this.left.depthFirstTraversal(iterateFunc);
  }
  
  if(order === 'in-order') {
    iterateFunc(this.value)
  }
  
  if(this.right) {
    this.right.depthFirstTraversal(iterateFunc)
  }
  
  if(order === 'post-order') {
    iterateFunc(this.value)
  }
};


BST.prototype.breadthFirstTraversal = function(iterateFunc) {
  var queue = [this];
  
  while(queue.length) {
    
    var treeNode = queue.shift();
    iterateFunc(treeNode);
    
    if(treeNode.left) {
      queue.push(treeNode.left);
    }
    if(treeNode.right) {
      queue.push(treeNode.right);
    }
  }
};


BST.prototype.getMinVal = function() {
  if(this.left) {
    return this.left.getMinVal();
  }
  else{
    return this.value;
  }
};
