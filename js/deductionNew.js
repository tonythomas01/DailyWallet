
	
	function deDuction()	{
		
		var value =document.getElementById('recharge');
		var value1=document.getElementById('misc');
		var balcheckR=document.getElementById('balanceCheck');
		



		balcheckR.onclick=function()	{
			alert('Wallet Contains:'+localStorage.balance);
		}

		
		value.onclick=function(){
		
			var deductAmnt1;

			deductAmnt1=prompt('Amount Spend :','');
			if(checkOut(deductAmnt1)==1){

			appendToStorage('recharge-',deductAmnt1);
			}	
		//write to localStorage
		}
		value1.onclick=function()	{
			var deductAmnt1;

			deductAmnt1=prompt('Amount Spend :','');
			if(checkOut(deductAmnt1)==1){
			appendToStorage('misc-',deductAmnt1);	
		}

		}
	}
	function appendToStorage(deductItem,deductAmnt1)	{
		var old=localStorage.history;
		if(old==null)	old="";
		var currentdate=new Date(); 
		var datetime=+currentdate.getDate() + "/"  + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
		localStorage.history=old+"\n"+datetime+"\n"+deductItem+":"+deductAmnt1;
	
}

	window.onload=function()	{
			deDuction();
			

		}
	
	
	function checkOut(deductAmnt1)	{
		if(deductAmnt1<0)	{
			alert('Oops! Enter Value > 0');
		}
		else 	
		{
		if(+deductAmnt1< localStorage.balance)	{
			localStorage.balance=localStorage.balance - deductAmnt1;
			
			alert('Wallet thin by :'+deductAmnt1+"\n New balance:Rs "+localStorage.balance);
			return 1;
		}
		else
		{
			alert('Thats Not Possible :( \n You are running Out of Wallet');
			return 0;
		}
	}
	}



