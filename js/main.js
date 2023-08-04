
let emailEl = document.getElementById("email")
let submitbtnEl = document.getElementById("submit-Btn")
let closebtnEL = document.getElementById("close-el")
let successModal = document.getElementById("infoModal")
let formContainerEl = document.querySelector(".formContainer")
let paraEL = document.querySelector(".paragraph-el")
let email = document.querySelector("#email")


submitbtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  let emailvalue = emailEl.value 
  // Validate Email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailvalue)) {
    document.getElementById("emailError").innerHTML =
      `Valid email required.`;

      email.style.borderColor = ' red'
      emailEl.style.color = ' red'
      
      

  } else {
    document.getElementById("emailError").innerHTML = " ";
    formContainerEl.classList.add("hidden")
    successModal.classList.remove("hidden")
    paraEL.innerHTML = emailvalue
    email.style.backgroundColor = " "
    email.style.opacity = " "
    email.style.borderColor = " black "
    email.style.color = " black"
    
    
  }
})

closebtnEL.addEventListener("click", function() {
  formContainerEl.classList.remove("hidden")
  successModal.classList.add("hidden")
  emailvalue = " "
  
})

