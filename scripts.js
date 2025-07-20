document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  if (email === "admin@example.com" && password === "admin123") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Replace with actual dashboard
  } else {
    errorMessage.textContent = "Invalid email or password.";
  }
});
