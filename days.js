function dayscal(){
	

	var firstdate=new Date(document.getElementById("startdate").value);
	var seconddate=new Date(document.getElementById("enddate").value);
	if (firstdate.getTime() < seconddate.getTime()) 
	{
var Difference_In_Time = firstdate.getTime() - seconddate.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
 document.getElementById("result").textContent="The Total Days between are "+Difference_In_Days;
}

else
{

  alert("Please Choose Startdate less Than End Date");

}
}