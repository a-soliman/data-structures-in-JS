// constructer Function

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// INSERT method

BST.prototype.insert = function(value) {
  //chck if the value is less than or equal to the prototype
  if(value <= this.value) {
    //check if the LEFT side is free
    if(!this.left) {
      this.left = new BST(value);
    }
    //Otherwise
    else {
      this.left.insert(value)
    }
  }
  //if the value is greater than the root
  else if (value > this.value) {
    //check is the RIGHT side is free
    if(!this.right) {
      this.right = new BST(value);
    }
    //Otherwise
    else {
      this.right.insert(value)
    }
  }
}

// CONTAINES method to search through the Tree
BST.prototype.containes = function(value) {
  //check if the value is equal to the root's value
  if(value === this.value) {
    return true;
  }
  else {
    //check if the value is less or grater than the root 
    if(value < this.value) {
      // checkif the left side is free
      if(!this.left) {
        return false;
      }
      else {
        return this.left.containes(value);
      }
    }
    else if (value > this.value) {
      // check if the RIGHT side is free
      if(!this.right) {
        return false;
      }
      else{
        return this.right.containes(value);
      }
    }
  }      
};

// depthFirstTraversal method => to go through the Tree's nodes in depthFirstTraversal
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  if(order === 'pre-order') {
    iteratorFunc(this.value);
  }
  
  //check if there is a LEFT child and reun it iteratorFunc
  if(this.left) {
    this.left.depthFirstTraversal(iteratorFunc, order);
  }
  if(order === 'in-order') {
    iteratorFunc(this.value);
  }
  
  //check if there is a RIGHT child and run it on
  if(this.right) {
    depthFirstTraversal(iteratorFunc, order);
  }
  
  if(order === 'post- order') {
    iteratorFunc(this.value);
  }
};

//breadthFirstTraversal method
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  
  while(queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    
    if(treeNode.left) {
      queue.push(treeNode.left);
    }
    
    if(treeNode.right) {
      queue.push(treeNode.right);
    }
  }
};

//getMinVal method
BST.prototype.getMinVal = function() {
  if(this.left) {
    return this.left.getMinVal();
  }
  else{
    return this.value;
  }
};

//getMaxVal method
BST.prototype.getMaxVal = function() {
  if(this.right) {
    return this.right.getMaxVal();
  }
  else {
    return this.value;
  }
};

// remove method ==
BST.prototype.remove = function(value) {
  if(!this.containes(value)) {
    return null;
  }
  else {
    var key = this.find(value)
    //if it was a leaf
    if(!key.left && !key.right) {
      //code goes here
      //code goes here
      //code goes here
      key = null;
      return key;
    }
    //if it has one child
    else if(key.left && !key.right) {
      key = key.left;
    } 
    else if(key.righ && !key.left) {
      key = key.right;
    }
    //if it has 2 child
  }
};