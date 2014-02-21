
			window.onload=function()	{
			var extra=document.getElementById('parents');
			var extra1=document.getElementById('atm');
			var balcheckR=document.getElementById('balanceCheck');
			var num2=0;
	
			extra.onclick=function(){
			
			  	num2=prompt('Amount to Add:','');
			  	
			  	checkin(num2);
			  	appendToStorageAdd('Parents+',num2);
			  	 }
			  extra1.onclick=function(){
			
			  	num2=prompt('Amount to Add:','');
			  	checkin(num2);
			  	appendToStorageAdd('ATM+',num2);
			}
		

		balcheckR.onclick=function()	{
			alert('Wallet Contains:Rs '+localStorage.balance);
		}
	
		}
			function appendToStorageAdd(deductItem,num2)	{
		
		var old=localStorage.history;
		if(old==null)	old="";
		var currentdate=new Date(); 
		var datetime=+currentdate.getDate() + "/"  + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
		localStorage.history=old+"\n"+datetime+"\n"+deductItem+":"+num2;
	
		}


			function checkin(num2)	{
				if(num2 < 0)	{
					alert('Oops ! Enter a value > 0');
					
					}
			else {
				if(localStorage.balance==0)	{
					
					localStorage.balance=num2;
		
					alert("Wallet Thick by :"+num2+"\n Wallet Contains :"+localStorage.balance);
			  
				}
				else {
					localStorage.balance=+localStorage.balance + +num2;
					alert("Wallet Thick by :"+num2+"\n Wallet Contains :"+localStorage.balance);
					
				}
			}
		}
		
