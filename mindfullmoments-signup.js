function check(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const notification = document.getElementById('notification');
    const gender = document.querySelector('input[name="gender"]:checked');
    
    notification.innerText = '';

    if (name && email && password && gender) {
        alert('Sign-up Successful!');
        window.location.href = 'mindfullmomentslogin.html'; 
    } else {
        notification.style.color = 'red';
        notification.innerText = 'Please fill all details.';
    }
}


// for showing the password
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('signupForm').addEventListener('submit', check);

    document.getElementById('togglePassword').addEventListener('change', function() {
        const passwordField = document.getElementById('password');
        passwordField.type = this.checked ? 'text' : 'password';
    });
});

