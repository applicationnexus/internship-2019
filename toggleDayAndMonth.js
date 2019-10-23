function changeDay(){
	var day = document.getElementById("day").innerHTML;
		
		switch(day)
		{
			case "Monday":
					document.getElementById("day").innerHTML = "Tuesday";
					day = "Tuesday";
					break;
			
			case "Tuesday":
					document.getElementById("day").innerHTML = "Wednesday";
					day = "Wednesday";
					break;
			
			case "Wednesday":
					document.getElementById("day").innerHTML = "Thursday";
					day = "Thursday";
					break;
				
			case "Thursday":
					document.getElementById("day").innerHTML = "Friday";
					day = "Friday";
					break;
				
			case "Friday":
					document.getElementById("day").innerHTML = "Saturday";
					day = "Saturday";
					break;
					
			case "Saturday":
					document.getElementById("day").innerHTML = "Sunday";
					day = "Sunday";
					break;
				
			case "Sunday":
					document.getElementById("day").innerHTML = "Monday";
					day = "Monday";
					break;
				
			default:
					document.getElementById("day").innerHTML = "Monday";
					day="Monday";
					break;
		}
	document.getElementById("day").innerHTML;
}

function changeMonth(){
	var month = document.getElementById("month").innerHTML;
		
		switch(month)
		{
			case "January":
					document.getElementById("month").innerHTML = "February";
					month = "February";
					break;
			
			case "February":
					document.getElementById("month").innerHTML = "March";
					month = "March";
					break;
			
			case "March":
					document.getElementById("month").innerHTML = "April";
					month = "April";
					break;
				
			case "April":
					document.getElementById("month").innerHTML = "May";
					month = "May";
					break;
				
			case "May":
					document.getElementById("month").innerHTML = "June";
					month = "June";
					break;
					
			case "June":
					document.getElementById("month").innerHTML = "July";
					month = "July";
					break;
				
			case "July":
					document.getElementById("month").innerHTML = "August";
					month = "August";
					break;
			
			case "August":
					document.getElementById("month").innerHTML = "September";
					month = "September";
					break;
			
			case "September":
					document.getElementById("month").innerHTML = "October";
					month = "October";
					break;
			
			
			case "October":
					document.getElementById("month").innerHTML = "November";
					month = "November";
					break;
					
			
			case "November":
					document.getElementById("month").innerHTML = "December";
					month = "December";
					break;
					
			
			case "December":
					document.getElementById("month").innerHTML = "January";
					month = "January";
					break;
			
			default:
					document.getElementById("month").innerHTML = "January";
					month="January";
					break;
		}
}