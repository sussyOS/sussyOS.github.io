document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const messageEl = document.getElementById('signupMessage');

    // Check if passwords match
    if (password !== confirmPassword) {
        messageEl.style.color = 'red';
        messageEl.innerText = "Passwords do not match!";
        return;
    }

    try {
        const response = await fetch('https://sussyos.pythonanywhere.com/user/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            messageEl.style.color = 'green';
            messageEl.innerText = "Signup successful! Redirecting to plan selection...";

            setTimeout(() => {
                window.location.href = '/user/plan.html';
            }, 1000);
        } else {
            messageEl.style.color = 'red';
            messageEl.innerText = data.message || 'Signup failed';
        }
    } catch (error) {
        messageEl.style.color = 'red';
        messageEl.innerText = 'Error: ' + error.message;
    }
});
