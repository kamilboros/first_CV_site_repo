function time()
	{
		var today = new Date();
		
		var hour = today.getHours();
		if (hour<10) hour = "0"+hour;
		
		var min = today.getMinutes();
		if (min<10) min = "0"+min;
		
		var sec = today.getSeconds();
		if (sec<10) sec = "0"+sec;
		
		document.getElementById("clock").innerHTML = hour+":"+min+":"+sec;
		 
		setTimeout("time()",1000);
	}