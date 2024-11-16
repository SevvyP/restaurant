const contact = () => {
  const contactList = [
    {
      type: "Address",
      contact: "1234 Elm St, Springfield, IL 62701",
    },
    {
      type: "Phone",
      contact: "555-555-5555",
    },
    {
      type: "Email",
      contact: "test@test.com",
    },
  ];

  const contactPage = document.createElement("div");
  const contact = document.createElement("h1");
  contact.textContent = "Contact Us";
  contact.classList.add("item");

  contactPage.appendChild(contact);

  contactList.forEach((item) => {
    const contactItem = document.createElement("div");
    const contactType = document.createElement("h2");
    contactType.textContent = item.type;
    contactItem.appendChild(contactType);

    const contactInfo = document.createElement("p");
    contactInfo.textContent = item.contact;
    contactItem.appendChild(contactInfo);

    contactItem.classList.add("item");
    contactPage.appendChild(contactItem);
  });

  return contactPage;
};

export default contact;
