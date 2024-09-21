const passwordEl = document.getElementById("pass")
const passwordStrengthTxt = document.querySelector(".strength")
const input = document.querySelector(".input-container")
const strengthMessage = document.querySelector(".strength-msg")
const eyeEl = document.querySelector(".eye")
const exAtr = pass.getAttribute("type")

passwordEl.addEventListener ("input", ()=>{
if(passwordEl.value.length > 0 && passwordEl.value.length < 8 ) {
    passwordStrengthTxt.classList.add("visible");
    input.style.borderColor = "red"
    strengthMessage.innerText="Poor"
    strengthMessage.style.color = "red"
} 
else if (passwordEl.value.length > 8 && passwordEl.value.length <= 10 ) {
passwordStrengthTxt.classList.add("visible");
    input.style.borderColor = "yellow"
    strengthMessage.style.color = "yellow"
    strengthMessage.innerText="Medium"
}
else if (passwordEl.value.length > 12 ) {
    passwordStrengthTxt.classList.add("visible");
        input.style.borderColor = "green"
        strengthMessage.style.color = "green"
        strengthMessage.innerText="Strong"
}
 })


 eyeEl.addEventListener("click", ()=>{
    if (passwordEl.getAttribute("type") == "password"){
        passwordEl.setAttribute("type", "text")
        eyeEl.classList.replace ("fa-eye", "fa-eye-slash")
    } else {
        passwordEl.setAttribute("type", "password")
        eyeEl.classList.replace ("fa-eye-slash", "fa-eye")
    }
 })