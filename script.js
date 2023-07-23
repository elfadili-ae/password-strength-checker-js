const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");
const btnImage = document.getElementById("view-password");

password.addEventListener("input", function(){

    const passwordValue = password.value;
    
    let strengthValue = checkPasswordStrength(passwordValue);

    strength.textContent = strengthValue;
    message.style.display = "block";
});

function checkPasswordStrength(password) {
    // Define the strength criteria
    const weakRegex = /^(?=.*[a-zA-Z]).{1,}$/;
    const mediumRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
    const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,-./:;<=>?@[\\\]^_`{|}~]).{11,}$/;
  
    if (strongRegex.test(password)) {
      return "Strong";
    } else if (mediumRegex.test(password)) {
      return "Medium";
    } else if (weakRegex.test(password)) {
      return "Weak";
    } else {
      return "";
    }
  }

  submitButton.addEventListener('click', function(){
    const buttonType = password.getAttribute("type");
    
    if (buttonType === "password")
    {
        btnImage.src = 'Assets/hidden.png';
        btnImage.alt = 'hide';
        password.setAttribute('type', 'text');
    }
    else
    {
        btnImage.src = 'Assets/view.png';
        btnImage.alt = 'show';
        password.setAttribute('type', 'password');
    }


  });