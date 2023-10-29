function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.style.backgroundImage = "url('https://th.bing.com/th?id=OIP.8JStfEdDZdRjNDH1pNjwrQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2')"; /* Add an eye-off icon image */
    } else {
        passwordInput.type = "password";
        toggleButton.style.backgroundImage = "url('eye.png')";
    }
}
