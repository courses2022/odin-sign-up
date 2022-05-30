

var password1 = document.querySelector("#password");
var password2 = document.querySelector("#confirmPassword");


var button = document.querySelector("#confirm");
button.addEventListener("click", ()=>{
    console.log(password1.value);
    if(password1.value == ""){
        console.log("please enter a password");
        
    }
    else if(password1.value != password2.value){
        console.log("passwords dont match");
    }
    else{
        alert("Thanks we will be in touch shortly");
    }
});




