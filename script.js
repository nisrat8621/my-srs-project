// Show/Hide Sections
function showLogin() {
    document.getElementById('register-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
}

function showRegister() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('register-box').style.display = 'block';
}

// 1. User Registration
function register() {
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if(email === "" || pass === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem(email, pass);
    alert("Registration Successful! Please login.");
    showLogin();
}

// 2. User Login
function login() {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;
    const storedPass = localStorage.getItem(email);

    if (storedPass && storedPass === pass) {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('user-display').innerText = "Logged in as: " + email;
    } else {
        alert("Invalid email or password!");
    }
}

// 3. User Logout
function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
    alert("Logged out successfully!");
}