if ( localStorage.balance === undefined ) {
    localStorage.balance= 0;
}
$(function() {
  $('#balanceCheck').click(function() {
	alert('Wallet Contains: Rs.'+localStorage.balance);
   });
});


function reset_wallet() {
	var a=confirm("Empty Wallet ?\n Will Erase all Data !");
	if(a==true)
	{
	localStorage.balance=document.getElementById('localStorage.balance');
	localStorage.balance=0;
	localStorage.history="Wallet History\n ---------------";
	var balanceNew=document.getElementById('balanceNew');
	balanceNew=0;
	alert("Wallet Emptied! \n Balance :"+localStorage.balance);
	  }
	  else
	  {
		alert("Later !");
	  }
}
$(function() {
    $( "#selection").accordion({
      active: true,
      collapsible :false
    });
});

function show_history()	{
  alert(localStorage.history);
}