const contact = document.getElementById("contact");

contact.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        messageTitle: document.getElementById("message-title").value,
        messageDesc: document.getElementById("message-desc").value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Horee! " + data.message);
      contact.reset();
    } else {
      alert("Gagal: " + data.message);
    }
  } catch (error) {
    alert("Koneksi bermasalah");
    console.log(error);
  }
});
