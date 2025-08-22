document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://sussyos.pythonanywhere.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Login successful
            document.getElementById('loginMessage').style.color = 'green';
            document.getElementById('loginMessage').innerText = "Login successful! Redirecting...";
            // Store token for later use
            localStorage.setItem('authToken', data.token);
            // Redirect to dashboard
            window.location.href = '/user/dashboard.html';
        } else {
            // Login failed
            document.getElementById('loginMessage').style.color = 'red';
            document.getElementById('loginMessage').innerText = data.message || 'Login failed';
        }
    } catch (error) {
        document.getElementById('loginMessage').innerText = 'Error: ' + error.message;
    }
});
