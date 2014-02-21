
			var button=document.getElementById('deducButton');
			var numInput=document.getElementById('deduction');
			button.addEventListener('click',function(){
			  	var num3=numInput.value;
			  	checkin(num3);
			
			
		})
		function checkin(num3)	{
			
					if(num3<localStorage.balance)	{
					localStorage.balance=localStorage.balance - num3;
					alert("Wallet thin by :"+num3+ "\n Wallet Contains :"+localStorage.balance);

				}
				else
				{
					alert("Sorry Dude, Bankrupt! \n Wallet Contains Rs"+localStorage.balance);

				}
	
					
			}
