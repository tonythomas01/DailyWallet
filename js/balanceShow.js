window.onload= function()	{
var balcheckR=document.getElementById('balanceCheck');
		balcheckR.onclick=function()	{
			alert('Wallet Contains:'+localStorage.balance);
	}
}