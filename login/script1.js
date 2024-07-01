document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registrationFormContainer = document.getElementById("registrationFormContainer");
    const registerLink = document.getElementById("registerLink");

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.classList.add("hidden");
        registrationFormContainer.classList.remove("hidden");
    });

    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const location = document.getElementById("location").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Add your validation logic here (e.g., password matching, email format, etc.)
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
        } else {
            // Handle registration logic (e.g., sending data to server, storing in database)
            // For this example, we'll just show an alert
            alert(`Registration successful!\nUsername: ${username}\nEmail: ${email}\nLocation: ${location}\nContact Number: ${contactNumber}`);
            registrationForm.reset();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Check if username and password match the predefined values
        if (username === "user" && password === "password") {
            // Redirect to a new page (for example, welcome.html)
            window.location.href = "welcome/welcome.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    // Rest of your code (registration form handling, etc.) remains unchanged
});
