document.addEventListener("DOMContentLoaded", function() {
    // Prompt for user's name when the page loads
    var name = prompt("Siapakah nama Anda?");
    if (name === null || name === "") {
        name = "Pengunjung";
    }

    // Update welcome message
    var welcomeMessage = document.querySelector(".welcome-message");
    var usernameSpan = document.getElementById("username");
    welcomeMessage.textContent = "Hi, ";
    usernameSpan.textContent = name;

    // Form submission handling
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Retrieve form input values
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;

        // Display form input values
        var resultContainer = document.getElementById("result");
        resultContainer.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        // Clear form fields after submission
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    });
});
