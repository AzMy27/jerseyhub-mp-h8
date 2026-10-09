const form = document.getElementById("register");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "";

  const passwordInput = document.getElementById("password").value;
  const passwordConfirmInput = document.getElementById("confirm-password").value;

  if (passwordInput !== passwordConfirmInput) {
    message.textContent = "Password tidak cocok!";
    return;
  }

  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: passwordInput,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      message.textContent = data.message || "Registration failed";
      return;
    }

    window.location.href = "/login";
  } catch (error) {
    message.textContent = "Unable to connect to server.";
  }
});
