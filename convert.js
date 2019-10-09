function calculate()
{
	var y = document.getElementById("converter1").value;
	var z = document.getElementById("converter2").value;
	var x = document.getElementById("amt").value;
	document.getElementById("amount").value=x;

	if(y=="INR" && z=="Dollar")
		document.getElementById("result").value = x*0.014;
	else if(y=="INR" && z=="Pound")
		document.getElementById("result").value = x*0.011;
	else if(y=="INR" && z=="Euro")
		document.getElementById("result").value = x*0.013;
	else if(y=="INR" && z=="Yen")
		document.getElementById("result").value = x*1.51;
	else if(y=="Dollar" && z=="INR")
		document.getElementById("result").value = x*70.83;
	else if(y=="Dollar" && z=="Pound")
		document.getElementById("result").value = x*0.81;
	else if(y=="Dollar" && z=="Euro")
		document.getElementById("result").value = x*0.91;
	else if(y=="Dollar" && z=="Yen")
		document.getElementById("result").value = x*106.94;
	else if(y=="Pound" && z=="INR")
		document.getElementById("result").value = x*87.35;
	else if(y=="Pound" && z=="Dollar")
		document.getElementById("result").value = x*1.23;
	else if(y=="Pound" && z=="Euro")
		document.getElementById("result").value = x*1.12;
	else if(y=="Pound" && z=="Yen")
		document.getElementById("result").value = x*131.86;
	else if(y=="Euro" && z=="INR")
		document.getElementById("result").value = x*77.77;
	else if(y=="Euro" && z=="Dollar")
		document.getElementById("result").value = x*1.10;
	else if(y=="Euro" && z=="Pound")
		document.getElementById("result").value = x*0.89;
	else if(y=="Euro" && z=="Yen")
		document.getElementById("result").value = x*117.42;
	else if(y=="Yen" && z=="INR")
		document.getElementById("result").value = x*0.66;
	else if(y=="Yen" && z=="Dollar")
		document.getElementById("result").value = x*0.0094;
	else if(y=="Yen" && z=="Pound")
		document.getElementById("result").value = x*0.0076;
	else if(y=="Yen" && z=="Euro")
		document.getElementById("result").value = x*0.0085;
}