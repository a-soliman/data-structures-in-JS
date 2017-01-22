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
