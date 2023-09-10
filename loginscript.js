document
  .getElementById("loginform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Check if username and password are valid
    if (username === username && password === password) {
      // Successful login
      alert("Login Successful");
    } else {
      // Invalid login
      alert("Invalid username or password");
    }
  });

document
  .getElementById("registrationform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;

    // Check if all fields are filled
    if (username && email && password && confirmPassword) {
      // Check if passwords match
      if (password === confirmPassword) {
        // Successful registration
        alert("Registration Successful");
        // Reset the form
        document.getElementById("registrationform").reset();
      } else {
        // Passwords don't match
        alert("Passwords do not match");
      }
    } else {
      // Missing fields
      alert("Please fill in all fields");
    }
  });

document
  .getElementById("loginform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    window.location.href = "lelearn.html";
  });

function getLoggedInUsername() {
  return "username";
}
const profileIcon = document.getElementById("profile-icon");
const user = document.getElementById("username");
const logggedInUsername = getLoggedInUsername();
user.textContent = logggedInUsername;
profileIcon.title = "Logged in as" + logggedInUsername;
