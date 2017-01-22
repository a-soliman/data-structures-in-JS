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

// // remove method
// HashTable.prototype.remove = function(key) {
//   //hash it into a number
//   var index = this.hash(key);
  
//   //check if the place is empty
//   if(!this.buckets[index]) {
//     return null;
//   }
//   //check if the place = the key
//   else if(this.buckets[index].key === key) {
//     console.log(key, ' is located in the 1st position');
//     if(!this.buckets[index].next) {
//       this.buckets[index] = null;
//     }
//   }
//   else {
//     var currentNode = this.buckets[index];
    
//     while(currentNode.next) {
//       if(currentNode.key === key) {
//         console.log('found ' + key + ' located at : ')
//         currentNode.key = null;
//         currentNode.value = null;
//         return;
//       }
//       currentNode = currentNode.next;
//     }
//     //remove here too
//     console.log('found ' + key + ' at the last position')
//     currentNode.key = null;
//     currentNode.value = null;
//   }
// };

//get method to retrive information
HashTable.prototype.get = function(key) {
  //hash the key to deside whick bucket to look in
  var index = this.hash(key);
  //check if the bucket is empty
  if(!this.buckets[index]) {
    return null;
  }
  // if the bucket isn't empty
  else {
    var currentNode = this.buckets[index];
    
    //loop through the chain in the bucket
    while(currentNode) {
      //check the currentNode's key
      if(currentNode.key === key) {
        return currentNode;
      }
      //move to the next node
      currentNode = currentNode.next;
    }
    
    return null;
  }
}

//retriveAll method to get all the information stored in the HashTable
HashTable.prototype.retriveAll = function() {
  //an Array to contain the results
  var allNodes = [];
  
  //loop through the table buckets
  for(var i = 0; i < this.numBuckets; i++) {
    
    //creat a start pont for looping
    var currentNode = this.buckets[i];
    
    while(currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
}


var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com')
myHT.insert('Megan', 'megan@gmail.com')
myHT.insert('Dane', 'dane@yahoo.com')

// console.log(myHT.buckets[8])
// console.log(myHT.get('Dean'))
console.log(myHT.retriveAll())
