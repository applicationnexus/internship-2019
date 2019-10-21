

    
    function res()
    {
      
   

document.getElementById('loanamt').value=" ";
document.getElementById('repamt').value=" ";
document.getElementById('intamt').value=" ";

document.getElementById('emiamt').value=" ";
document.getElementById('payamt').value=" ";
document.getElementById('totalamt').value=" ";
    }
    

function abc()
{




  var loanamt=document.getElementById('loanamt').value;
  var repamt=document.getElementById('repamt').value;
  var intamt=document.getElementById('intamt').value;



if(loanamt=="")
{
  
  alert("Enter The Loan Amount ")
}
else if (repamt=="") 
{

alert("Enter The Repayment Interest Rate ")
}
else
if(intamt=="")
{
 
 alert("Enter The Interest Rate")
}
else
{
var a;
var b;
var c;

a=Math.round(loanamt * (intamt/1200) / (1-(Math.pow(1/(1 + (intamt/1200)), repamt)))*100)/100;
document.getElementById("emiamt").value=a;




b=Math.round((a * repamt)*100)/100;

document.getElementById("totalamt").value=b;



c=Math.round((b* 1 - loanamt*1)*100)/100;

document.getElementById("payamt").value=c;
}

}


    
  
