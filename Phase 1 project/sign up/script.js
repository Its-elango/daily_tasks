//disabling future date selection
const today = new Date().toISOString().split('T')[0];
document.getElementById('dob').setAttribute('max', today);

//validatung address
function validateAddress() {
  var address = document.getElementById("address").value;
  var error = document.getElementById("addressError");

  if (address == "") {
    error.textContent = "Address can't be empty";
    return false;
  }
  else {
    error.textContent = " ";
  }
  return true;
}

//validatung first name
function validateFname() {
  var name = document.getElementById("fname").value;
  var error = document.getElementById("fnameError");
  var word = (/^[A-Za-z]+$/);

  if (name == "") {
    error.textContent = "First name can't be empty";
    return false;
  }
  else if (!word.test(name)) {
    error.textContent = "First name only contains alphabets";
    return false;
  }
  else {
    error.textContent = " ";
  }
  return true;
}

//validatung last name
function validateLname() {
  var name = document.getElementById("lname").value;
  var error = document.getElementById("lnameError");
  var word = (/^[A-Za-z]+$/);

  if (name == "") {
    error.textContent = "Last name can't be empty";
    return false;
  }
  else if (!word.test(name)) {
    error.textContent = "Last name only contains alphabets";
    return false;
  }
  else {
    error.textContent = " ";
  }
  return true;
}

//validatung phonenumber
function validatePhone() {
  var phone = document.getElementById("phone").value;
  var error = document.getElementById("phoneError");
  var number = /^\d+$/;

  if (phone == "") {
    error.textContent = "Phone number can't be empty";
    return false;
  }
  else if (!number.test(phone)) {
    error.textContent = "Phone number only contains number";
    return false;
  }
  else {
    error.textContent = " ";
  }
  return true;
}

//validatung password
function validatePassword() {
  var pass = document.getElementById("pwd").value;
  var error = document.getElementById("pwdError");

   // Check for empty input
  if (pass == "") {
    error.textContent = "Password can't be empty";
    return false;
  }
   // Check for the password length
  if (pass.length < 8) {
    error.textContent = "Password must be at least 8 characters.";
    return false;
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(pass)) {
    error.textContent = "Password must contain uppercase.";
    return false;
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(pass)) {
    error.textContent = "Password must contain lowercase.";
    return false;
  }

  // Check for at least one digit
  if (!/\d/.test(pass)) {
    error.textContent = "Password must contain digit.";
    return false;
  }
  else {
    error.textContent = " ";
  }
  return true;
}

 // validating confirm password
function validateCpassword() {
  var pass = document.getElementById("pwd").value;
  var confirm_pass = document.getElementById("cpwd").value;
  var error = document.getElementById("cpwdError");

  if (pass != confirm_pass) {
    error.textContent = "Passwords must be same";
    return false;
  }
  else {
    error.textContent = " ";
  }
}

 //Validating email
function validateEmail() {
  var email = document.getElementById("email").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var error = document.getElementById("emailError");

  if (email == "") {
    error.textContent = "Email can't be empty";
    return false;
  }
  else if
    (!(emailPattern.test(email))) {
    error.textContent = "Enter valid email";
    return false;
  }
  else {
    error.textContent = " ";
  }
  return true;
}

 // Validating username
function validateUname() {
  var uname = document.getElementById("uname").value;
  var unamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var error = document.getElementById("unameError");

  if (uname == "") {
    error.textContent = "Username can't be empty";
    return false;
  }
  else if
    (!(unamePattern.test(uname))) {
    error.textContent = "Enter valid username";
    return false;
  }
  else {
    error.textContent = " ";
  }
  return true;
}

//validatating age by DOB
function validatedate() {
  var date = document.getElementById("dob").value;
  var error = document.getElementById("dobError");

  if (date == "") {
    error.textContent = "Date of birth can't be empty";
    return false;
  }
  return true;
}

 //Calculating age based on date of birth
function validatedob() {
  var userinput = document.getElementById("dob").value;
  var error = document.getElementById("dobError");

  var dob = new Date(userinput);
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  //extract year from date    
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  var result_age = Math.abs(year - 1970);

  if (result_age > 18) {
    var display = document.getElementById('age');
    display.value = result_age;
  }
  else if (result_age < 18) {
    error.textContent = "Age should be 18 above";
    return false;
  }
  else {
    error.textContent = " ";
  }
  return true;
}

//validating dependent select option
function validatestate() {
  var state = document.getElementById("state").value;
  var error = document.getElementById("stateError");

  if (state == "") {
    error.textContent = "State can't be empty";
    return false;
  }
  else {
    error.textContent = " ";
  }
  return true;
}

//setting dynamic select option 
function choose(state, city) {
  var state = document.getElementById(state);
  var city = document.getElementById(city);

  city.innerHTML = "";

  if (state.value == "tn") {
    var optionArray = ['chennai|Chennai', 'erode|Erode', 'kovai|Kovai', 'ooty|Ooty'];

  }
  else if (state.value == 'kl') {
    var optionArray = ['kochin|Kochin', 'thrissur|Thrissur', 'kollam|Kollam', 'kozhikode|Kozhikode'];
  }

  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");

    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    city.options.add(newoption);
  }
}

//validatung onsubmit 
function validateform() {
  var isValid = true;

  // Validate each field and update isValid
  isValid = validateAddress() && isValid;
  isValid = validateUname() && isValid;
  isValid = validateFname() && isValid;
  isValid = validateLname() && isValid;
  isValid = validateEmail() && isValid;
  isValid = validatePhone() && isValid;
  isValid = validatePassword() && isValid;
  isValid = validatedate() && isValid;
  isValid = validatestate() && isValid;

  if (isValid == true) {
    alert("Sign up successfull");
  }
  return isValid;
}
