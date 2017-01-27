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