//Array declaration 
var emp = [];

//Output Function
function display(){
 
Name = document.getElementById('Name').value;
Age = document.getElementById('Age').value;
Salary = document.getElementById('Salary').value;
Contact = document.getElementById('Contact').value;
Dept = document.getElementById('Dept').value;
   
    if(!(Name.match(/^[A-Za-z ]+$/))||!Name)
    {
        alert("Only character allowed in NAME and not empty ...!! ")
    }
    else if(isNaN(Age) || Age<=0 || Age>=100 || !Age){
            alert("Only numbers allowed in AGE and invalid AGE and not empty ...!!");
            }
    else if(isNaN(Salary)||Salary<0 || !Salary){
            alert("Only numberic values allowed in SALARY and not empty  ...!! ");
        }
    else if(!(Contact.match(/^[0-9].{9}$/)) || !Contact){
            alert("Only 10 digits allowed in CONTACT and not empty ...!!");
        }
    else if(!(Dept.match(/^[A-Za-z ]+$/))||!Dept)
    {
        alert("Only character allowed in DEPARTMENT and not empty ...!! ")
    }
    else
    {
              
        //Array of objects
        emp.push({"name":Name,"age":Age,"sal":Salary,"phn":Contact,"dept":Dept});
        var newObj = emp [ emp.length -1 ];
    
        document.getElementById('show').innerHTML += "<tr><td>"+ newObj.name + "</td><td>" + newObj.age + "</td><td>" + newObj.sal + "</td><td>" + newObj.phn + "</td><td>" + newObj.dept + "</td></tr>";
    
            document.getElementById("Name").value = "";
            document.getElementById("Age").value = "";
            document.getElementById("Salary").value = "";
            document.getElementById("Contact").value = "";
            document.getElementById("Dept").value = "";
    }
    
}