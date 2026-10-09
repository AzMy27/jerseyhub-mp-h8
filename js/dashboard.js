const tableBody = document.getElementById("contact");

let contacts = [];
const loadContacts = async () => {
  try {
    const response = await fetch("/api/contact");
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || "Failed to load products");

    contacts = data;
    renderContacts();
  } catch (error) {}
};

const renderContacts = () => {
  tableBody.innerHTML = "";

  contacts.forEach((data) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td class="p-4">${data.first_name} ${data.last_name}</td>
        <td class="p-4">${data.email}</td>
        <td class="p-4 font-bold text-primary">${data.message_title}</td>
        <td class="p-4 text-gray-600">${data.message_desc}</td>
    `;
    tableBody.appendChild(row);
  });
};

loadContacts();
