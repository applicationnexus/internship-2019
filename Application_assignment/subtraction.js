function subtract1()
{
    var n1 = parseInt(document.getElementById('txtno1').value);
    var n2 = parseInt(document.getElementById('txtno2').value);
    
    while(n2 != 0)
    {
        var temp = (~n1)&n2;
        n1= n1^n2;
        n2 = temp<<1;
    }
    document.getElementById('l1').innerHTML = "Subtraction is "+n1;
}