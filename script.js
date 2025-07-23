// ✅ LOGIN FORM VALIDATION
function validateLogin() {
  const username = document.getElementById("loginUsername");
  const password = document.getElementById("loginPassword");

  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill in all fields.");
    return false;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const found = users.find(
    (user) =>
      user.username === username.value.trim() &&
      user.password === password.value.trim()
  );

  if (found) {
    alert("Login successful!");
    window.location.href = "apply_leave.html";
    return false;
  } else {
    alert("Invalid username or password.");
    return false;
  }
}

// ✅ REGISTRATION FORM VALIDATION WITH PASSWORD RULES
function validateRegister() {
  const username = document.getElementById("registerUsername");
  const password = document.getElementById("registerPassword");
  const confirmPassword = document.getElementById("confirmPassword");

  if (
    username.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmPassword.value.trim() === ""
  ) {
    alert("Please fill in all fields.");
    return false;
  }

  // ✅ Password Rule Check
  const pass = password.value;
  const passRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  if (!passRules.test(pass)) {
    alert("Password must be at least 6 characters and include:\n- One uppercase letter\n- One lowercase letter\n- One digit\n- One special character");
    return false;
  }

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return false;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.some((user) => user.username === username.value.trim())) {
    alert("Username already exists.");
    return false;
  }

  users.push({
    username: username.value.trim(),
    password: password.value.trim(),
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
  window.location.href = "login.html";
  return false;
}

// ✅ LEAVE FORM VALIDATION
function validateLeaveForm() {
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  const type = document.getElementById("leaveType");
  const reason = document.getElementById("reason");

  if (!from.value || !to.value || !type.value) {
    alert("Please fill in all required fields.");
    return false;
  }

  if (new Date(from.value) > new Date(to.value)) {
    alert("From date cannot be after To date.");
    return false;
  }

  const leaves = JSON.parse(localStorage.getItem("leaves") || "[]");

  leaves.push({
    from: from.value,
    to: to.value,
    type: type.value,
    reason: reason.value.trim(),
  });

  localStorage.setItem("leaves", JSON.stringify(leaves));
  alert("Leave submitted successfully!");
  return false;
}
