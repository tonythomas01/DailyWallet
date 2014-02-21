			var button=document.getElementById('resetButton');
			
			button.addEventListener('click',function(){
			var a=confirm("Empty Wallet ?\n Will Erase all Data !");
			if(a==true)
			{
			localStorage.balance=document.getElementById('localStorage.balance');
			localStorage.balance=0;
			localStorage.history='History Start (in Rs) \n';
			var balanceNew=document.getElementById('balanceNew');
			balanceNew=0;
			alert("Wallet Emptied! \n Balance :"+localStorage.balance);
			  }
			 else
			 {
			 	alert("Later !");
			 }
		})
			
