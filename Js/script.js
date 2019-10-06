function changeUrl(){
    var urlAddress = document.getElementById("urlAddress").value; // Get the value from input
    document.getElementById('displayUrl').innerHTML = urlAddress; // Display the URL
    document.getElementById('websiteDisplay').setAttribute("src" ,urlAddress); // Show the website into iframe
    return console.log(urlAddress)
}