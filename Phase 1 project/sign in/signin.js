function validateform()
{
    var email=document.getElementById("email").value;
    var pwd=document.getElementById("pwd").value;
    var mail="admin123@gmail.com";
    var pass="admin123";

    if(email==mail && pwd==pass )
    {
        alert("Login Success");
    }
    else{
        alert("Incorrect Email or Password");
    }
}