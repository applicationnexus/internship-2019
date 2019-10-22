function emicalculate()
{
    //fetch all values
    var principle=document.getElementById('p1').value;
    var month=document.getElementById('month').value;
    var repay=document.getElementById('repay').value;
	//Calculates EMI
	var rate=repay/(12*100);
	var prate=(principle*rate*Math.pow((1+rate),month))/(Math.pow((1+rate),month)-1); 
	var emi=Math.ceil(prate*100)/100;
	//Calculate Total payable Amount
	var totpay=emi*month
	//Calculate interest to be pay
	var intpay=totpay-principle
	//set all values
    document.getElementById('emi').value=emi
    document.getElementById('intpay').value=intpay.toFixed(1)
    document.getElementById('tpay').value=totpay.toFixed(1)
    
}
