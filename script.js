
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
    
    
    if(firstName.value ==""){
        nameErrorMsg.classList.remove("hidden");
    }else{
        nameErrorMsg.classList.add("hidden");
    }

    if(email.value ==""){
        emailErrorMsg.firstElementChild.innerText = "Email addresss is required";
        emailErrorMsg.classList.remove("hidden");
    }
    else if(email.validity.valid == false){
        emailErrorMsg.firstElementChild.innerText = "Email addresss is not valid";
        emailErrorMsg.classList.remove("hidden");
    }else{
        emailErrorMsg.classList.add("hidden");
    }
    
    if(phone.value == ""){
        phoneErrorMsg.firstElementChild.innerText = "Phone number is required";
        phoneErrorMsg.classList.remove("hidden");
    }
    else if(!phone.validity.valid){
        phoneErrorMsg.firstElementChild.innerText = "Phone number is not valid";
        phoneErrorMsg.classList.remove("hidden");
    }
    else{
        phoneErrorMsg.classList.add("hidden");
    }

    if(password1.value == ""){
        passwordErrorMsg.firstElementChild.innerText = "Password is required";
        passwordErrorMsg.classList.remove("hidden");
        
    }
    else if(password1.value != password2.value){
        passwordErrorMsg.firstElementChild.innerText = "Passwords dont match";
        passwordErrorMsg.classList.remove("hidden");
        
    }
    else{
        passwordErrorMsg.classList.add("hidden");
                
    }

    if(firstName.validity.valid && email.validity.valid && phone.validity.valid && password1.value!= "" && (password1.value == password2.value)){
        window.alert("Thank you!! We will be in touch shortly.");
    }
});




