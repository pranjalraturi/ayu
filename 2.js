script.js
javascript
Copy code
// script.js

function checkCredentials(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Mock credentials (Replace with actual logic or database in real scenarios)
    const correctUsername = 'ayushi';
    const correctPassword = 'ayumikauc';

    // Check if credentials match mock data
    if (username === correctUsername && password === correctPassword) {
        document.getElementById('loginMessage').textContent = 'Login successful!';
        // Show a letter or content for successful login
        // Example: document.getElementById('content').style.display = 'block';
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password. Please try again.';
    }
}
