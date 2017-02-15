// practicing bigO


//1) O(1) => Constant
  // 
function increasment(num) {
  return ++num;
}

//2) O(n) => Linear
  // n stands for the size of the input => array in this exampl
  function sequntialSearch(array, item) {
  var length = array.length
  var cost = 0;
  
  for(var i =0; i < array.length; i++) {
    cost++;
    if(array[i] === item) {
      return i;
    }
  }
  console.log('Cost for sequntialSearch of size : ' + length +' ,is : ' +cost)
  return -1;
}

sequntialSearch([1,2,3,4,5,6,7,8,9,10], 11);

//3) O(n2) => Quadratic 