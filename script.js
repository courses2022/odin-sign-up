
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
        nameErrorMsg.classList.remove("hidden");
    }else{
        nameErrorMsg.classList.add("hidden");
    }

    if(email.value ==""){
        console.log("Email is required");
        emailErrorMsg.classList.remove("hidden");
    }
    else if(email.validity.valid == false){
        console.log("Email is not valid");
        emailErrorMsg.classList.remove("hidden");
    }
    
    if(phone.value == ""){
        console.log("phone number is required");
        phoneErrorMsg.classList.remove("hidden");
    }
    else if(!phone.validity.valid){
        console.log("Phone number is not valid");
        phoneErrorMsg.classList.remove("hidden");
    }

    if(password1.value == ""){
        console.log("please enter a password");
        passwordErrorMsg.classList.remove("hidden");
        
    }
    else if(password1.value != password2.value){
        console.log("passwords dont match");
        passwordErrorMsg.classList.remove("hidden");
    }
    else{
        alert("Thanks we will be in touch shortly");
    }
});




