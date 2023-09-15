
//Validating email

function validateEmail(){

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

   //Validating password

  function validatePassword()
  {
     var pass=document.getElementById("pwd").value;
     var error=document.getElementById("passwordError");

      // Check for at empty password
     if (pass=="") {
      error.textContent="Password can't be empty";
      return false;
     }

      // Check for password length
     if (pass.length < 8) {
      error.textContent="Password must be at least 8 characters.";
      return false;
      }

    // Check for at least one uppercase letter
      if (!/[A-Z]/.test(pass)) {
        error.textContent="Password must contain uppercaseetter.";
        return false;
       }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(pass)) {
       error.textContent="Password must contain lowercaseetter.";
       return false;
      }

     // Check for at least one digit
    if (!/\d/.test(pass)) {
      error.textContent="Password must contain digit.";  
      return false;  
    }
   return true;
  }

// Validating form on submission
  function validateform(){

    var email=document.getElementById("email").value;
    var pwd=document.getElementById("pwd").value;
    var error=document.getElementById("passwordError");
    var isValid = true;

    // Validate each field and update isValid
    isValid = validatePassword() && isValid;
    isValid = validateEmail()&& isValid;


    if(isValid==true ) {
        alert("Login success");
    }

    else if(email=="" && pwd==""){
        error.textContent="Enter email and password";
    }
    
    else{
      alert("Password or email wrong");
    }
}