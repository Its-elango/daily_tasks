//Email validation
function validateEmail()
{
  var email = document.getElementById("email").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var error=document.getElementById("emailError");
  
  if(email=="")
  {
    error.textContent="Email can't be empty";
    return false;
  }
  else if(!(emailPattern.test(email)))
   {
    error.textContent="Enter valid email";
    return false;
   }
   return true;
  }

  //Name validation
  function validateName()
  {
     var name=document.getElementById("name").value;
     var error=document.getElementById("nameError");
     var word=(/^[A-Za-z]+$/);

     if(name=="")
     {
       error.textContent="Name can't be empty";
       return false;
     }
     else if(!word.test(name))
     {
       error.textContent="Name only contains alphabets";
       return false;
     }
     return true;
  }

  //Phone number validation
  function validatePhone()
   {
      var phone=document.getElementById("phone").value;
      var error=document.getElementById("phoneError");
      var number= /^\d+$/;

      if(phone=="")
      {
        error.textContent="Phone number can't be empty";
        return false;
      }
      else if(!number.test(phone))
      {
        error.textContent="Phone number only contains number";
        return false;
      }
      return true;
   }

   //Message validation
   function validateMessage()
   {
      var address=document.getElementById("message").value;
      var error3=document.getElementById("messageError");

      if(address=="")
      {
        error3.textContent="Address can't be empty";
        return false;
      }
      return true;
   }

  //Onsubmit validation
   function validateform(){
    var isValid = true;

    // Validate each field and update isValid
    isValid = validateEmail() && isValid;
    isValid = validateName() && isValid;
    isValid = validatePhone() && isValid;
    isValid = validateMessage() && isValid;

    if(isValid==true)
    {
    alert("Message sent successfully");
    }
    return isValid;

   }