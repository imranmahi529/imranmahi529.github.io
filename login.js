function loginUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "admin" && password === "mahi123") {
    alert("Login successful!");
    window.location.href = "dashboard.html";
    return false;
  } else {
    alert("Wrong username or password!");
    return false;
  }
}