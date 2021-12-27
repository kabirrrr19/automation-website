'use strict';

const signupTab = document.getElementById("tab-2");
const loginTab = document.getElementById("tab-1");
const usernameLogin = document.getElementById("user");
const passwordLogin = document.getElementById("pass");
const submitLogin = document.getElementById("submit");
const forgotPassLogin = document.getElementById("forgotPass");
const errorMessage = document.getElementById("err-message");
const usernameRegister = document.getElementById("user2");
const passwordRegister = document.getElementById("pass2");
const repeatPasswordRegister = document.getElementById("repeatPass");
const emailRegister = document.getElementById("email");
const submitRegister = document.getElementById("submitReg");





// Error message element
const message = document.createElement("h4");
message.classList.add("alert");
message.classList.add("alert-danger");
message.classList.add("text-center");


submitRegister.addEventListener("click", () => {
  if (
    usernameRegister.value === "" ||
    passwordRegister.value === "" ||
    repeatPasswordRegister.value === "" ||
    emailRegister.value === ""
  ) {
      message.innerHTML = "Please enter valid signup credentials";
      message.style.display = "block";
    errorMessage.appendChild(message);
  } else if (passwordRegister.value !== repeatPasswordRegister.value) {
      message.innerHTML = "Password and repeat password must be the same";
      message.style.display = "block";
    errorMessage.appendChild(message);
  } else {
    loginTab.click();
    usernameRegister.value =
      repeatPasswordRegister.value =
      emailRegister.value =
      passwordRegister.value =
        "";
      message.innerHTML = "Registration successful.";
      message.style.display = "block";
      message.classList.toggle("alert-success");
      message.classList.toggle("alert-danger");
    errorMessage.appendChild(message);
  }
});


// Adding a navigation to the forgot password link
forgotPassLogin.addEventListener("click", () => {
  signupTab.click();
})

loginTab.addEventListener("click", () => {
    message.style.display = "none";
    usernameLogin.value = passwordLogin.value = "";
})

signupTab.addEventListener("click", () => {
    message.style.display = "none";
})
