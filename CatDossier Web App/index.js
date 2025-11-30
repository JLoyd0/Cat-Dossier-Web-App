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

function handleLogIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    const errorDiv = document.getElementById('loginError'); 
    

    if(username === "admin" && password === "1234") {
        if(remember) {
            localStorage.setItem("savedUsername", username);
        } else {
            localStorage.removeItem("savedUsername");
        }
        window.location.href = "dashboard.html";
    } else {

        errorDiv.textContent = "Incorrect username or password!";
        errorDiv.style.display = "block";
    }

    return false;
}


window.onload = () => {
    const savedUsername = localStorage.getItem("savedUsername");
    if(savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('remember').checked = true;
    }
};
