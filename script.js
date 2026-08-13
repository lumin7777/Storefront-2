/* =================================
   VELA COFFEE
   Main JavaScript
================================= */


/* =================================
   MENU DATA
================================= */

const menuData = {

    coffee: [
        {
            name: "Espresso",
            description: "Rich, concentrated, and beautifully balanced.",
            price: 3.50
        },
        {
            name: "Americano",
            description: "Espresso, hot water, and nothing unnecessary.",
            price: 4.00
        },
        {
            name: "Cappuccino",
            description: "Espresso, steamed milk, and silky foam.",
            price: 5.00
        },
        {
            name: "Flat White",
            description: "Velvety milk with a double espresso.",
            price: 5.25
        },
        {
            name: "Vanilla Latte",
            description: "Espresso, steamed milk, and house vanilla.",
            price: 5.50
        },
        {
            name: "Mocha",
            description: "Espresso, dark chocolate, and steamed milk.",
            price: 5.75
        }
    ],

    tea: [
        {
            name: "Earl Grey",
            description: "Classic black tea with bergamot and citrus.",
            price: 4.00
        },
        {
            name: "Jasmine Green",
            description: "Delicate green tea with soft floral notes.",
            price: 4.25
        },
        {
            name: "Chamomile",
            description: "A gentle herbal tea with honeyed notes.",
            price: 4.00
        },
        {
            name: "Masala Chai",
            description: "Black tea, warm spices, and steamed milk.",
            price: 4.75
        },
        {
            name: "Matcha Latte",
            description: "Ceremonial matcha with silky steamed milk.",
            price: 5.50
        },
        {
            name: "Iced Green Tea",
            description: "Refreshing green tea served over ice.",
            price: 4.25
        }
    ],

    food: [
        {
            name: "Butter Croissant",
            description: "Flaky, golden, and baked fresh each morning.",
            price: 4.50
        },
        {
            name: "Almond Croissant",
            description: "Classic pastry filled with almond cream.",
            price: 5.25
        },
        {
            name: "Avocado Toast",
            description: "Sourdough, avocado, sea salt, and olive oil.",
            price: 9.50
        },
        {
            name: "Morning Toast",
            description: "Sourdough, cultured butter, and seasonal jam.",
            price: 7.00
        },
        {
            name: "Yogurt & Granola",
            description: "Greek yogurt, house granola, and fresh fruit.",
            price: 8.50
        },
        {
            name: "Chocolate Tart",
            description: "Dark chocolate ganache with flaky sea salt.",
            price: 6.50
        }
    ]

};


/* =================================
   MENU DISPLAY
================================= */

const menuItemsContainer = document.getElementById("menu-items");
const menuButtons = document.querySelectorAll(".menu-category");


function displayMenu(category) {

    menuItemsContainer.innerHTML = "";

    menuData[category].forEach((item, index) => {

        const menuItem = document.createElement("div");

        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>

            <div class="menu-item-price">
                $${item.price.toFixed(2)}
            </div>
        `;

        menuItemsContainer.appendChild(menuItem);

    });

}


/* =================================
   MENU CATEGORY BUTTONS
================================= */

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        menuButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        displayMenu(category);

    });

});


/* Show coffee menu when page loads */

displayMenu("coffee");


/* =================================
   ORDER PANEL
================================= */

const orderButton = document.querySelector(".order-button");
const orderPanel = document.querySelector(".order-panel");
const orderOverlay = document.querySelector(".order-overlay");
const closeOrder = document.querySelector(".close-order");


function openOrder() {

    orderPanel.classList.add("open");
    orderOverlay.classList.add("open");

    document.body.classList.add("order-open");

}


function closeOrderPanel() {

    orderPanel.classList.remove("open");
    orderOverlay.classList.remove("open");

    document.body.classList.remove("order-open");

}


orderButton.addEventListener("click", openOrder);

closeOrder.addEventListener("click", closeOrderPanel);

orderOverlay.addEventListener("click", closeOrderPanel);


/* =================================
   ESCAPE KEY
================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeOrderPanel();
    }

});
