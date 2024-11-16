const menu = () => {
  const menuItems = [
    {
      name: "Pizza",
      description: "A delicious pizza with tomato sauce, cheese, and pepperoni",
      price: "$8.99",
    },
    {
      name: "Burger",
      description: "A juicy burger with lettuce, tomato, and onion",
      price: "$7.99",
    },
    {
      name: "Fries",
      description: "Crispy fries with a side of ketchup",
      price: "$2.99",
    },
  ];

  const menuPage = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Menu";
  title.classList.add("item");
  menuPage.appendChild(title);

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    const itemName = document.createElement("h2");
    itemName.textContent = item.name;
    menuItem.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    menuItem.appendChild(itemDescription);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = item.price;
    menuItem.appendChild(itemPrice);

    menuItem.classList.add("item");
    menuPage.appendChild(menuItem);
  });

  return menuPage;
};

export default menu;
