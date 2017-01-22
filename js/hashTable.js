//constructor funcs
function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

//Nodes function
function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// hash method => hashes a letter into Number
HashTable.prototype.hash = function(key) {
  var total = 0;
  for(var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  
  return bucket;
}

// HashTable.prototype.insert = function(key, value) {
//   var index = this.hash(key)
  
//   if(!this.buckets[index]) {
//     this.buckets[index] = new HashNode(key, value);
//   }
//   else {
//     var currentNode = this.buckets[index]
    
//     while(currentNode.next) {
//       currentNode = currentNode.next; 
//     }
//     currentNode.next = new HashNode(key, value);
//   }
// }


// insert method to insert a new bucket or change the value of an existing one
HashTable.prototype.insert = function(key, value) {
  //hash the key to number so the bucket gets desided
  var index = this.hash(key);
  
  //if there the bucket is free then place it there
  if(!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  }
  // check if the first position is equal to the new node's key => if yes then change the value
  else if(this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  //if non of the above
  else {
    var currentNode = this.buckets[index];
    
    while(currentNode.next) {
      //check if any of the existing nodes in the ckain have the same key => if yes then change the value
      if(currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      //if not then contenu looping
      currentNode = currentNode.next;
    }
    //if you didnt find the placethe new node at the very end of the chain inside the bucket
    currentNode.next = new HashNode(key, value)
  }
}
