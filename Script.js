var emp = [];

function display(){
 
Name = document.getElementById('Name').value;
Age = document.getElementById('Age').value;
Salary = document.getElementById('Salary').value;
Contact = document.getElementById('Contact').value;
Dept = document.getElementById('Dept').value;
    if(!(Name.match(/^[A-Za-z ]+$/)))
    {
        alert("Only character allowed...!!")
    }
    else if(isNaN(Age)||Age<=0||Age>=100){
            alert("Only numbers allowed in AGE Or invalid AGE...!!");
            }
    else if(isNaN(Salary)||Salary<0){
            alert("Only numberic values allowed in SALARY...!! ");
        }
    else if(!(Contact.match(/^[0-9].{9}$/))){
            alert("Only 10 digits allowed...!!");
        }
    else if(Name==""||Age==""||Salary==""||!Contact||Dept=="")
    {
        alert("Enter all details...!!");
    }
    else
        {         
              
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