let fNameError = document.getElementById("fNameError");
let lNameError = document.getElementById("lNameError");
let passError = document.getElementById("passError");
let emailError = document.getElementById("emailError");
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

function validateForm()
{
    let fName = document.forms["registration"]["firstName"].value;
    let lName = document.forms["registration"]["lastName"].value;
    let email = document.forms["registration"]["email"].value;
    let password = document.forms["registration"]["password"].value;
    let valid = true;

    if(fName === "" || fName === " ")
    {
        fNameError.textContent = "First Name cannot be empty";
        document.getElementById("firstName").classList.add("invalid");
        document.getElementById("firstName").classList.add("errorImage");
        valid = false;
    }

    if(lName === "" || lName === " ")
    {
        lNameError.textContent = "Last Name cannot be empty";
        document.getElementById("lastName").classList.add("invalid");
        document.getElementById("lastName").classList.add("errorImage");
        valid = false;
    }

    if(email === "" || email === " " || (!email.match(emailFormat)))
    {
        emailError.textContent = "Looks like this is not an email";
        document.getElementById("email").classList.add("invalid");
        document.getElementById("email").classList.add("errorImage");
        valid = false;
    }

    if(password === "" || password === " ")
    {
        passError.textContent = "Password cannot be empty";
        document.getElementById("password").classList.add("invalid");
        document.getElementById("password").classList.add("errorImage");
        valid = false;
    }

    return valid;
   
}