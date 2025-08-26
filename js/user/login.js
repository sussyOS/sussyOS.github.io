// login.js
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://sussyos.pythonanywhere.com/user/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // keep session cookies
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('loginMessage').style.color = 'green';
            document.getElementById('loginMessage').innerText = "Login successful! Redirecting...";
            // Redirect to home page
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        } else {
            document.getElementById('loginMessage').style.color = 'red';
            document.getElementById('loginMessage').innerText = data.message || 'Login failed';
        }
    } catch (error) {
        document.getElementById('loginMessage').style.color = 'red';
        document.getElementById('loginMessage').innerText = 'Error: ' + error.message;
    }
});
