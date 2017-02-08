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

  //================================================
  // the real function starts here
  
  //if no amount just return false 
  if(!amount) {
    return false;
    }
  // if there is an amount run the Algorithm
  else if(amount) {
    var givenAmount = amount;
    var coinUsed = [];
    //loop through the coins set
    for(var i = 0; i < coinsSet.length; i++) {
      // check if amount is greater than the coin;
      if(amount >= coinsSet[i]) {
        newAmount = amount - coinsSet[i];
        coinUsed.push(coinsSet[i]);
        amount = newAmount;
        //console.log('new Amount = ' + amount + ' - ' + coinsSet[i] +' = ' + newAmount )
        
        if(amount >= coinsSet[i]) {
          recount(amount);
        //console.log('new Amount = ' + amount + ' - ' + coinsSet[i] +' = ' + newAmount )
        }
      }
    }