/*This will show up the current balance */

$(function() {
  $('#balanceCheck').click(function() {
	alert('Wallet Contains:'+localStorage.balance);
   });
});

/* This will bring up the accordion */
$(function() {
    $( "#expenses" ).accordion({
      active: false,
      collapsible :true
    });
});


/* The function which appends the deduction to the localStorage */
function appendToStorage(deductItem,deductAmount) {
  var old=localStorage.history;
  if( old==null ) {
    old="";
  }
  var currentdate=new Date(); 
  var datetime=+currentdate.getDate() + "/"  + (currentdate.getMonth()+1)  + "/" 
		+ currentdate.getFullYear() + " @ "  
		+ currentdate.getHours() + ":"  
		+ currentdate.getMinutes() + ":" 
		+ currentdate.getSeconds();
  localStorage.history=old+"\n"+datetime+"\n"+deductItem+":"+deductAmount;S
}

/*functions to handle the click event */
function reply_click(clicked_id) {
    var deductAmount;
    var deductItem = clicked_id;
    deductionAmount=prompt('Amount Spend :','');
    if( possibleDeduction(deductionAmount) ) {
         appendToStorage(deductItem,deductionAmount);	
     } 
}

/*function to check whether a deduction is possible */
function possibleDeduction (deductAmount) {
    if ( deductAmount< 0 || deductAmount == null ) {
      alert('Oops! Enter Value > 0');
      return 0;
    } else if ( +deductAmount<localStorage.balance) {
      localStorage.balance=(localStorage.balance-deductAmount);
      alert('Wallet thin by :'+deductAmount+"\n New balance:Rs "+ localStorage.balance);
      return 1;
    } else {
      alert("Thats not possible :( \n You are running Out of Wallet");
      return 0;
    }
}

