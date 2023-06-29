function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
    if(username == "aravind" && password == "aravind02")
    {
        window.location.assign("home1.html");
        alert("Login successfull");
        return false;
    }
    else
    {
        alert("Invalid Login");
        return;
    }
}


function mailcaptured(){
    var mail = document.getElementById("mailform").value;

    alert("Your Email has Registered");
    return false;
}