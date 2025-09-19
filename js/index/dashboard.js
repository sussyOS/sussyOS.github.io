// Ask backend if user is logged in
fetch("https://sussyos.pythonanywhere.com/user/dashboard/", {
    method: "GET",
    credentials: "include"
})
.then(async response => {
    let data;
    try {
        data = await response.json();
    } catch {
        throw new Error("Server did not return JSON. Status: " + response.status);
    }

    if (response.ok) {
        document.getElementById("dashboardMessage").innerText = data.message;
    } else {
        // Not logged in → redirect to login page
        window.location.href = "https://sussyos.github.io/user/login.html";
    }
})
.catch(error => {
    document.getElementById("dashboardMessage").innerText = "Error: " + error.message;
});
