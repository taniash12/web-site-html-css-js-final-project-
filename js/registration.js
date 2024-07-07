"use strict";

const formValidation = document.getElementById("form-validation");

formValidation.addEventListener("submit",function(e){
    e.preventDefault();

    let errors = {};
    let formElement = this;

    const userName = document.getElementById("username").value;
    if(userName === ""){
        errors.username = "Username field can not be empty"
    }

    const pass1 = document.getElementById("password").value;
    const pass2 = document.getElementById("password2").value;

    if(pass1 === ""){
        errors.password1 = "Password field can not be empty"
    }
    if(pass1 !== pass2){
        errors.password2 = "Passwords do not match"
    }
    let gender = false;
    const radioArray = formElement.querySelectorAll("[name = 'radio']");
    radioArray.forEach((item)=>{
        if(item.checked){
            gender = true;
        }
    });
    if(!gender){
        errors.radio = "Please select your gender";
    }

    const agree = document.getElementById("radio-agree").checked;
    if(!agree){
        errors.agree = "You must agree our terms and conditions";
    }
    formValidation.querySelectorAll(".error-text").forEach((e)=> {
        e.innerText = "";
    });

    for (let item in errors){
        let errorElement = document.getElementById("error-" + item);
        if(errorElement){
            errorElement.innerText = errors[item];
        }
    }
    if (Object.keys(errors).length === 0) {
        formValidation.submit();
      }
});

document.getElementById("email").addEventListener("input", function () {
    let email = document.getElementById("email").value;
    let text = document.getElementById("error-email");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (email.match(pattern)) {
      text.innerHTML = "Your Email is Valid";
      text.style.color = "#00ff00";
    } else {
      text.innerHTML = "Your Email is invalid";
      text.style.color = "#D10F0F";
    }
    if (email == "") {
      text.innerHTML = "";
      text.style.color = "#D10F0F";
    }
  });
  let closeIcone = document.getElementById("eye-close");
  let pass = document.getElementById("password");

  closeIcone.onclick = function(){
      if(pass.type == "password"){
          pass.type = "text"
          closeIcone.src = "img/eye-open.png"
      }else{
          pass.type = "password"
          closeIcone.src = "img/eye-close.png"
      }
  };
  let closeIcone2 = document.getElementById("eye-close2");
  let pass2 = document.getElementById("password2");

  closeIcone2.onclick = function(){
      if(pass2.type == "password"){
          pass2.type = "text"
          closeIcone2.src = "img/eye-open.png"
      }else{
          pass2.type = "password"
          closeIcone2.src = "img/eye-close.png"
      }
  }



  const passValide1 = document.getElementById("password").value;
  const passValide2 = document.getElementById("password2").value;


  passValide1.addEventListener("input",function(){
    let text = passValide1.value;
    const pattern = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;
    let red = querySelector(".input-box");

    if (passValide1.match(pattern)) {
        red.style.boredr = "green";
      } else {
        red.style.boredr = "red";
      }
   
  })


  function passCheck() {
    let pass = document.getElementById("password");
    let check = document.getElementById("check");
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let check4 = document.getElementById("check4");
 

    if(pass.value.match(/[0-9]/)){
        check3.style.color = "green";
    }else{
        check3.style.color = "red";
    }
    if(pass.value.match(/[A-Z]/)){
        check2.style.color = "green";
    }else{
        check2.style.color = "red";
    }
    if(pass.value.match(/[a-z]/)){
        check1.style.color = "green";
    }else{
        check1.style.color = "red";
    }
    if(pass.value.match(/[@\!\,\,\.\&\?\%\^\_\-\+\<\>\(\)\$\#\*]/)){
        check4.style.color = "green";
    }else{
        check4.style.color = "red";
    }
    if(pass.value.length < 8){
        check.style.color = "red";
    }else{
        check.style.color = "green";
    }
  }

  function conform(){
    const pass1 = document.getElementById("password");
    const pass2 = document.getElementById("password2");

    if(pass1.value === pass2.value){
        document.getElementById("check").style.display = "none";
        document.getElementById("check1").style.display = "none";
        document.getElementById("check2").style.display = "none";
        document.getElementById("check3").style.display = "none";
        document.getElementById("check4").style.display = "none";
    }else{
        document.getElementById("check").style.display = "block";
        document.getElementById("check1").style.display = "block";
        document.getElementById("check2").style.display = "block";
        document.getElementById("check3").style.display = "block";
        document.getElementById("check4").style.display = "block";
    }
  }