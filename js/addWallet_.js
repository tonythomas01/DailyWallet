/*This will show up the current balance */

$(function() {
  $('#balanceCheck').click(function() {
	alert('Wallet Contains:'+localStorage.balance);
   });
});

/* This will bring up the accordion */
$(function() {
    $( "#income" ).accordion({
      active: false,
      collapsible :true
    });
});

/* Function to append the localStorage */
function appendToStorageAdd(addItem,addAmount)	{
  var old=localStorage.history;
  if(old==null)	{
    old="";
  }
  var currentdate=new Date(); 
  var datetime=+currentdate.getDate() + "/"  + (currentdate.getMonth()+1)  + "/" 
		+ currentdate.getFullYear() + " @ "  
		+ currentdate.getHours() + ":"  
		+ currentdate.getMinutes() + ":" 
		+ currentdate.getSeconds();
  localStorage.history=old+"\n"+datetime+"\n"+addItem+":"+addAmount;
}

/*functions to handle the click event */
function reply_click(clicked_id) {
  var addAmount;
  var addItem = clicked_id;
  addAmount = prompt('Amount to Add:','');
  if ( possibleAdd(addAmount) ) {
         appendToStorage(addItem,addAmount);	
     }
}

/*function to check whether an add is possible */
function possibleAdd(addAmount) {
    if ( addAmount< 0 || addAmount == null ) {
      alert('Oops! Enter Value > 0');
      return 0;
    } else if (localStorage.balance == 0) {
      localStorage.balance= addAmount;
      alert("Wallet Thick by :"+addAmount+"\n Wallet Contains :"+localStorage.balance);
      return 1;
    } else {
      localStorage.balance=+localStorage.balance + +addAmount;
      alert("Wallet Thick by :"+addAmount+"\n Wallet Contains :"+localStorage.balance);
      return 1;
    }
}


  
