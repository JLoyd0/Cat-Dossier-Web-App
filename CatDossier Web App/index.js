const LogInForm = document.getElementById("LogInForm");
const SignUpForm = document.getElementById("SignUpForm");

function LogIn() {
    LogInForm.style.transform = "translateX(300px)";
    SignUpForm.style.transform = "translateX(300px)";
}

function SignUp() {
    LogInForm.style.transform = "translateX(0px)";
    SignUpForm.style.transform = "translateX(0px)";
}