function validateform() 
{
var name=document.form.name.value;
var phone=document.form.phone.value;
var emailInput = document.getElementById("email");
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var email = emailInput.value;
var message=document.form.message.value;


if (name == "" || phone == "" || message=="") 
{
    alert("Enter missing details");
}
if(!(emailPattern.test(email)))
{
    alert("Enter valid email");
}
else
{
    alert("Message sent successfully..")
}

}
