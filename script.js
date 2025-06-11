const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Toggle password visibility with bounce effect
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
        const input = document.querySelector(icon.getAttribute('toggle'));
        const isPassword = input.getAttribute('type') === 'password';

        icon.classList.add('hide'); // Trigger bounce out

        setTimeout(() => {
            input.setAttribute('type', isPassword ? 'text' : 'password');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
            icon.classList.remove('hide'); // Trigger bounce in
        }, 300); // Match CSS animation duration
    });
});
// Form validation
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!email || !password) {
        alert("Email and Password are required.");
        return false;
    }

    if (document.querySelector('.register.active') && password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}