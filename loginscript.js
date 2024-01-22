document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginform');
  const regUsernameInput = document.getElementById('regUsername');
  const regPasswordInput = document.getElementById('regPassword');
  const regConfirmPasswordInput = document.getElementById('regConfirmPassword');

  const registeredUsers = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      // Add more users as needed
  ];

  loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const loginUsernameInput = document.getElementById('loginUsername');
      const loginPasswordInput = document.getElementById('loginPassword');

      const enteredUsername = loginUsernameInput.value;
      const enteredPassword = loginPasswordInput.value;

      // Check if the entered username and password match any registered user
      const isValidUser = registeredUsers.some(user =>
          user.username === enteredUsername && user.password === enteredPassword
      );

      // ...

if (isValidUser) {
  alert('Login successful! Redirecting to the after login page.'); // Replace with your desired action

  // Redirect to the after login page
  window.location.replace("baluafterlogin.html"); // Use replace() for redirection
} else {
  alert('Invalid username or password. Please try again.');
}

// ...


      // Optional: Clear the form after the login attempt
      loginUsernameInput.value = '';
      loginPasswordInput.value = '';
  });

  // Additional validation for registration form
  document.getElementById('registrationform').addEventListener('submit', function (event) {
      event.preventDefault();

      const enteredPassword = regPasswordInput.value;
      const confirmedPassword = regConfirmPasswordInput.value;

      if (enteredPassword !== confirmedPassword) {
          alert('Passwords do not match. Please try again.');
      } else {
          // Add the new user to the registered users array
          const newUsername = regUsernameInput.value;
          registeredUsers.push({ username: newUsername, password: enteredPassword });

          alert('Registration successful!'); // Replace with your desired action

          // Optional: Clear the registration form after successful registration
          regUsernameInput.value = '';
          regPasswordInput.value = '';
          regConfirmPasswordInput.value = '';
      }
  });
});
