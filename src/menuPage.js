import "./style.css";
import Icon from "./menu-image.jpg";

function menuTabComponent() {
    // Select content div
    const content = document.getElementById("content");

    // Create header elements
    const header = document.createElement("div");
    const headerTitle = document.createElement("div");
    const h1 = document.createElement("h1");

    const headerTabs = document.createElement("div");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const aboutTab = document.createElement("div");

    // Add header
    h1.textContent = "MENU";
    header.className = "header";
    headerTitle.className = "header-title";
    headerTitle.appendChild(h1);
    header.appendChild(headerTitle);

    // Header tabs
    homeTab.textContent = "HOME";
    homeTab.className = "tabs home-tab";

    menuTab.textContent = "MENU";
    menuTab.className = "tabs menu-tab active";

    aboutTab.textContent = "ABOUT";
    aboutTab.className = "tabs about-tab";

    // Add home image
    const menuImage = new Image();
    menuImage.src = Icon;
    menuImage.className = "menu-image";
    header.appendChild(menuImage);

    // Set the class to headerTabs
    headerTabs.className = "header-tabs";

    headerTabs.appendChild(homeTab);
    headerTabs.appendChild(menuTab);
    headerTabs.appendChild(aboutTab);

    header.appendChild(headerTabs);

    // Add page container
    const pageContainer = document.createElement("div");
    pageContainer.className = "page-container";

    // Add restaurant info
    const menuInfo = document.createElement("div");
    menuInfo.className = "menu-info";
    menuInfo.innerHTML = `<h2>PIZZA</h2>
        <ul>
          <li>
            <h3>Margherita</h3>
            <p>Classic tomato sauce, mozzarella cheese, and fresh basil</p>
          </li>
          <li>
            <h3>Pepperoni</h3>
            <p>Tomato sauce, mozzarella cheese, and spicy pepperoni</p>
          </li>
          <li>
            <h3>Veggie</h3>
            <p>Tomato sauce, mozzarella cheese, mushrooms, bell peppers, onions, and olives</p>
          </li>
          <li>
            <h3>Meat Lovers</h3>
            <p>Tomato sauce, mozzarella cheese, sausage, bacon, and pepperoni</p>
          </li>
        </ul>
        
        <h2>PASTA</h2>
        <ul>
          <li>
            <h3>Spaghetti Bolognese</h3>
            <p>Traditional meat sauce over spaghetti noodles</p>
          </li>
          <li>
            <h3>Fettuccine Alfredo</h3>
            <p>Creamy Alfredo sauce over fettuccine noodles</p>
          </li>
          <li>
            <h3>Chicken Parmesan</h3>
            <p>Breaded chicken breast, tomato sauce, and mozzarella cheese over spaghetti noodles</p>
          </li>
          <li>
            <h3>Pesto Linguine</h3>
            <p>Linguine noodles tossed in a flavorful basil pesto sauce</p>
          </li>
        </ul>
        
        <h2>DRINKS</h2>
        <ul>
          <li>
            <h3>Soft Drinks</h3>
            <p>Coke, Diet Coke, Sprite, Fanta</p>
          </li>
          <li>
            <h3>Iced Tea</h3>
            <p>Freshly brewed tea with a hint of lemon</p>
          </li>
          <li>
            <h3>Beer</h3>
            <p>A selection of local and imported beers</p>
          </li>
          <li>
            <h3>Wine</h3>
            <p>Red and white wines from Italy and beyond</p>
          </li>
        </ul>
        
        <h2>DESSERTS</h2>
        <ul>
          <li>
            <h3>Tiramisu</h3>
            <p>Layers of ladyfingers soaked in espresso and rum, with mascarpone cheese and cocoa powder</p>
          </li>
          <li>
            <h3>Cannoli</h3>
            <p>Crispy pastry shells filled with sweetened ricotta cheese and chocolate chips</p>
          </li>
          <li>
            <h3>Chocolate lava cake</h3>
            <p>Warm chocolate cake with a molten chocolate center, served with vanilla ice cream</p>
          </li>
          <li>
            <h3>Gelato</h3>
            <p>Creamy Italian ice cream in a variety of flavors, including chocolate, vanilla, strawberry, and pistachio</p>
          </li>
        </ul>`;

    // Add elements to content div
    pageContainer.appendChild(menuInfo);

    content.appendChild(header);
    content.appendChild(pageContainer);
}

export { menuTabComponent };
