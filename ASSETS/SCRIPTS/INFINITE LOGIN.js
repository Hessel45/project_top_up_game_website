const container = document.querySelector(".container");
        const loginForm = document.querySelector('.login-form');
        const RegisterForm = document.querySelector('.Register-form');
        const RegiBtn = document.querySelector('.RegiBtn');
        const LoginBtn = document.querySelector('.LoginBtn');
        RegiBtn.addEventListener('click', () => {
            RegisterForm.classList.add('active');
            loginForm.classList.add('active');
        });
        LoginBtn.addEventListener('click', () => {
            RegisterForm.classList.remove('active');
            loginForm.classList.remove('active');
        });

RegiBtn.addEventListener('click', () => {
    RegisterForm.classList.add('active');
    loginForm.classList.add('active');
});

LoginBtn.addEventListener('click', () => {
    RegisterForm.classList.remove('active');
    loginForm.classList.remove('active');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful");
    }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        alert("Registration successful");
    }
});
