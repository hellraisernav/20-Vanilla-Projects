const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Functions
// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}
// show Success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check email is valid
function isValidEmail(email) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (userName.value === "") {
        showError(userName, "Username is required");
    } else {
        showSuccess(userName);
    }
    if (email.value === "") {
        showError(email, "Email is required");
    } else if (!isValidEmail(email.value)) {
        showError(email, "Email is not valid");
    } else {
        showSuccess(email);
    }
    if (password.value === "") {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }
    if (password2.value === "") {
        showError(password2, "Passwords don't match");
    } else {
        showSuccess(password2);
    }
    console.log(email.value);
});
