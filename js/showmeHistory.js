window.onload = function () {
  var historyClicked = document.getElementById('showHistory');
  historyClicked.onclick = function () {
    alert(localStorage.history);
  }
  var balancChecker = document.getElementById('balanceCheck');
  balancChecker.onclick = function()	{
	alert('Wallet Contains:'+localStorage.balance);
  }
}
