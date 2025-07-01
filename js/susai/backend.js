const API_BASE_URL = "";  // empty for now, to be replaced with backend URL later

function fetchData() {
  if (API_BASE_URL) {
    fetch(`${API_BASE_URL}/api/endpoint`)
      .then(response => response.json())
      .then(data => {
        // process and display data
      })
      .catch(err => console.error("Error fetching API:", err));
  } else {
    // Use mock data for now
    const mockData = { message: "Hello, George! Backend coming soon." };
    displayData(mockData);
  }
}

function displayData(data) {
  document.getElementById("output").textContent = data.message;
}

fetchData();
