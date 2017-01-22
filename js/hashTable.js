//constructor funcs
function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}