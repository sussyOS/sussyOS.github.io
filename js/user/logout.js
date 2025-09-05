// Call backend logout endpoint
fetch("https://sussyos.pythonanywhere.com/user/logout", {
    method: "POST",
    credentials: "include"
})
.then(response => response.json())
.then(data => {
    const messageEl = document.getElementById("logoutMessage");

    if (data.message === "Logged out successfully") {
        messageEl.innerText = "You have been logged out. Redirecting to home...";
        setTimeout(() => {
            window.location.href = "/";
        }, 1500);
    } else {
        messageEl.innerText = data.message || "Something went wrong logging out.";
    }
})
.catch(error => {
    document.getElementById("logoutMessage").innerText = "Error: " + error.message;
});
