var x = 0;
         var array=new Array();        
                

function add_element()
{          
 array[x]=new Array()
 array[x][0] = document.getElementById("text1").value;
 array[x][1] = document.getElementById("text2").value;
 array[x][2] = document.getElementById("text3").value;
 array[x][3] = document.getElementById("text4").value;
 array[x][4] = document.getElementById("text5").value;
    if(array[x][0]=="")
    {
        alert("Name Must Not Be Empty...");
    }
    else
    if(!(array[x][0].match(/^[A-Za-z ]+$/)))
    {
        alert("Enter Only Character in Name...");
    }    
    else if(array[x][1]<=0 || array[x][1]>=110)
    {
        alert("Enter Age Between 1 to 110");
    }
    else if(isNaN(array[x][1]))
    {
        alert("Please Enter Age in Integer");
    }
    else if(isNaN(array[x][2]))
    {
        alert("Please Enter Salary in Integer");
    }
    else if(array[x][2]=="")
    {
        alert("Salary Must Not Be Empty...");
    }
    else if(array[x][2]<0)
   	{
        alert("Please Ente Salary Greater Than 1");
   	}
    else if(isNaN(array[x][3]))
    {
        alert("Please Enter Mobile Number In Integer");	
    } 
    else if(!(array[x][3].match(/^[0-9].{9}$/)))
    {
        alert("Enter Correct Mobile Number");
    }
	else if(array[x][3]=="")
    {
        alert("Mobile Number Must Not Be Empty");
    }
    else if(array[x][4]=="")
    {
        alert("Department Name Must Not Be Empty");
    }
    else if(!array[x][0].match(/^[A-Za-z ]+$/))
    {
        alert("Department Name Must Be Only Character");
    }
    else if(!isNaN(array[x][4]))
    {
        alert("Department Name Must Not Be Integer");
    }
else
{
 

 document.getElementById("text1").value = "";
 document.getElementById("text2").value = "";
 document.getElementById("text3").value = "";
 document.getElementById("text4").value = "";
 document.getElementById("text5").value = "";

   
    document.getElementById('c1').style.display = 'block'; 
   
     document.getElementById('Result').innerHTML += "<tr><td>"+ array[x][0] + "</td><td>" + array[x][1] + "</td><td>" + array[x][2] + "</td><td>" + array[x][3] + "</td><td>" + array[x][4] + "</td></tr>";
   x++;
}
}
