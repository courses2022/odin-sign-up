
var firstName = document.querySelector("#firstName");
var nameErrorMsg = document.querySelector("#nameErrorMsg");
var email = document.querySelector("#email");
var emailErrorMsg = document.querySelector("#emailErrorMsg");
var phone = document.querySelector("#phoneNumber");
var phoneErrorMsg = document.querySelector("#phoneErrorMsg")
var password1 = document.querySelector("#password");
var password2 = document.querySelector("#confirmPassword");
var passwordErrorMsg = document.querySelector("#passwordErrorMsg");


var button = document.querySelector("#confirm");
button.addEventListener("click", ()=>{
    console.log(password1.value);
    
    if(firstName.value ==""){
        console.log("First name is required");
    }

    if(email.value ==""){
        console.log("Email is required");
    }
    else if(email.validity.valid == false){
        console.log("Email is not valid");
    }
    
    if(phone.value == ""){
        console.log("phone number is required");
    }
    else if(!phone.validity.valid){
        console.log("Phone number is not valid");
    }
    else if(password1.value == ""){
        console.log("please enter a password");
        
    }
    else if(password1.value != password2.value){
        console.log("passwords dont match");
    }
    else{
        alert("Thanks we will be in touch shortly");
    }
});




