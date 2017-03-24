function register()
{
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert(userEntered + " " + passEntered);
}
function validateUsername() {
  var userEntered = document.getElementById("user").value;
  if (userEntered.length < 6)
    {
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
    }
    else
      {
      //Show message that there is an error with the username...
      document.getElementById("usernameError").innerHTML="good username.";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
      //Turn the username items red
      document.getElementById("usernameGroup").classList.add("has-success");
      document.getElementById("usernameGroup").classList.remove("has-error");
      }
    }
function validatePassword() {
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;

  if (passEntered =="password")
    {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
    }
    else if (passEntered.length < 6)
      {
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML="Bad password.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
    }
    else if (passEntered.length >= 20)
      {
      //Show message that there is an error with the username...
      document.getElementById("passwordError").innerHTML="bad password.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the username items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
      }
    else if (passEntered == userEntered)
        {
        //Show message that there is an error with the password...
        document.getElementById("passwordError").innerHTML="Bad password.";
        document.getElementById("passwordError").classList.remove("hidden-message");
        document.getElementById("passwordError").classList.add("shown-message");
        //Turn the password items red
        document.getElementById("passwordGroup").classList.add("has-error");
        document.getElementById("passwordGroup").classList.remove("has-success");
        }
    else
      {
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML="good password.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
    }
  }
