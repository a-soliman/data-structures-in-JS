//1) Minimum Coin Change

function CoinsCounter(coinsSet, amount) {
  
  // a recursive function to count the remained amount and re calculate it to the same coin.
  var recount = function(remainedAmount) {
    //only works if the ramind amount is greater than the same coin in the loop
    if(remainedAmount >= coinsSet[i]) {
      newAmount = amount - coinsSet[i];
      coinUsed.push(coinsSet[i]);
      amount= newAmount;
      
      // recalls it self to double check
      recount(amount);
    }
    // a wayout.
    else{
      return;
    }
  };