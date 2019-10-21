

    
    function res()
    {
      
      //alert("hello")

document.getElementById('loanamt').value=" ";
document.getElementById('repamt').value=" ";
document.getElementById('intamt').value=" ";

document.getElementById('emiamt').value=" ";
document.getElementById('payamt').value=" ";
document.getElementById('totalamt').value=" ";
    }
    

function abc()
{



  //alert("hello")
  var loanamt=document.getElementById('loanamt').value;
  var repamt=document.getElementById('repamt').value;
  var intamt=document.getElementById('intamt').value;



if(loanamt=="")
{
  document.getElementById("msg1").innerHTML="fill this field"
}
else if (repamt=="") 
{
document.getElementById("msg2").innerHTML="fill this field"
}
else
if(intamt=="")
{
  document.getElementById("msg3").innerHTML="fill this filed";
}
else
{
var a;//emi
var b;//total payable
var c;//intrest

a=Math.round(loanamt * (intamt/1200) / (1-(Math.pow(1/(1 + (intamt/1200)), repamt)))*100)/100;
document.getElementById("emiamt").value=a;




b=Math.round((a * repamt)*100)/100;

document.getElementById("totalamt").value=b;



c=Math.round((b* 1 - loanamt*1)*100)/100;

document.getElementById("payamt").value=c;
}

}
