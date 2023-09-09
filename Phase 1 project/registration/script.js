
function validateform() {

//variable declaration

  var fname = document.myform.fname.value;
  var lname = document.myform.lname.value;
  var email = document.myform.email.value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var dob = document.myform.dob.value;
  var gender = document.myform.gender.value;
  var uname = document.myform.uname.value;
  var pwd=document.myform.pwd.value;
  var cpwd=document.myform.cpwd.value;

//validatating inputs

  if (fname == "" || lname == "" || dob=="" || uname=="" || gender=="select") 
  {
    alert("Enter missing details");
  }
  else if
  (!(emailPattern.test(email)))
   {
    alert("Enter valid email");
   }
  else if(!(pwd==cpwd))
   {
    alert("Passwords must be same");
   }
  }

  //validating dependent select option

  function choose(state,city)
  {
    var state = document.getElementById(state);
    var city = document.getElementById(city);

    city.innerHTML = "";

    if(state.value == "tn")
    {
      var optionArray = ['chennai|Chennai','erode|Erode','kovai|Kovai','ooty|Ooty'];
      
    }
    else if(state.value  == 'kl')
    {
      var optionArray = ['kochin|Kochin','thrissur|Thrissur','kollam|Kollam','kozhikode|Kozhikode'];
      
    }

    for(var option in optionArray)
    {
      var pair = optionArray[option].split("|");
      var newoption = document.createElement("option");

      newoption.value = pair[0];
      newoption.innerHTML=pair[1];
      city.options.add(newoption);
    }

  }



