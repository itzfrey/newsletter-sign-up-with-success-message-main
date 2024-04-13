// document.getElementById(subscribeForm).addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behaviour

//     // Get the email address from the form
//     var emailInput = document.getElementById('email');
//     var email = emailInput.Value;

//     // Regular expression for email validation
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Check if the email address matches the pattern
//     if (!emailPattern.test(email)) {
//         document.getElementById('emailError').style.dispay = 'block';
//         emailInput.classList.add('error-input');
//         return;
//     }

//     document.getElementById('emailError').styles.display = 'nono';
//     emailInput.classList.remove('error-input');


//     window.location.href = 'thank-you.html?email=' + encodeURIComponent(email);
// })  

// var emailField = document.getElementById("email-field");
// var emailLabel = document.getElementById("email-label");
// var emailError = document.getElementById("email-error");

// function validateEmail(){
//     emailLabel.style.font-size == "12px"; 

//     if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         emailError.innerHTML = "valid email required";
//         return false;
//     }

//     emailError.innerHTML = "";
//     return true;
// };

// var emailError = document.getElementById("email-error");


// function validate(){
//     const email = document.getElementById("email").value;
//     const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
//     if(regex.test(email)) {
//         emailError.innerHTML = "valid email required";
//     } else {
//         window.location.href = 'thank-you.html?email=' + encodeURIComponent(email);
//     }
// };


// var emailError = document.getElementById("email-error");

// function validate(){
//     const email = document.getElementById("email").value;
//     const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
//     if(regex.test(email)) {
//         emailError.innerHTML = "valid email required";
//     } else {
//         window.location.href = 'thank-you.html?email=' + encodeURIComponent(email);
//     }
// };

const input = document.querySelector("input");
const emailIcon = document.querySelector("email-label"); // Assuming this is corrected
var emailError = document.getElementById("email-error");
let isValidEmail = false;

input.addEventListener("input", () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.value === "") {
        emailError.innerHTML = ""; // Clear the error message if the input is empty
        isValidEmail = false;
    } else if (!input.value.match(pattern)) {
        emailError.innerHTML = "valid email required"; // Set the error message if the email is invalid
        isValidEmail = false
    } else {
        emailError.innerHTML = ""; // Clear the error message if the email is valid
        isValidEmail = true;
    }
});


document.getElementById("button").addEventListener('click', function() {
    if (isValidEmail) {
        window.location.href = 'thank-you.html?email=' + encodeURIComponent(input.value);
    } else {
        // Handle case where email format is not valid
        emailError.innerHTML = "valid email required";    }
});

document.getElementById("dismiss-button").addEventListener('click', function() {
    // Clear the email input
    input.value = "";
    // Navigate back to the main page
    window.location.href = 'main-page.html'; // Replace 'main-page.html' with the actual URL of your main page
});


