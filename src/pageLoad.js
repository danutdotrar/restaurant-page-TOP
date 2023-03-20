import "./style.css";
import Icon from "./home-image.jpg";

function component() {
    // Select content div
    const content = document.getElementById("content");

    // Create elements
    const header = document.createElement("div");
    const h1 = document.createElement("h1");

    const headerTabs = document.createElement("div");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const aboutTab = document.createElement("div");

    const restaurantInfo = document.createElement("div");

    // Add header
    h1.textContent = "Restaurant Page";
    header.className = "header";
    header.appendChild(h1);

    // // Tabs
    homeTab.textContent = "Home";
    homeTab.className = "home-tab";

    menuTab.textContent = "Menu";
    menuTab.className = "menu-tab";

    aboutTab.textContent = "About";
    aboutTab.className = "about-tab";

    // Add class to headerTabs
    headerTabs.className = "header-tabs";

    headerTabs.appendChild(homeTab);
    headerTabs.appendChild(menuTab);
    headerTabs.appendChild(aboutTab);

    header.appendChild(headerTabs);

    // Add restaurant info
    restaurantInfo.className = "home-info";
    restaurantInfo.innerText =
        "Welcome to our restaurant! We offer a diverse menu featuring fresh and locally sourced ingredients. Our skilled chefs prepare each dish with care, and our friendly staff is dedicated to providing you with a memorable dining experience. Whether you're in the mood for a hearty meal or a light bite, we have something to satisfy your appetite. Join us for breakfast, lunch, or dinner and discover the flavors of our cuisine.";

    // Add home image
    const homeImage = new Image();
    homeImage.src = Icon;
    homeImage.className = "home-image";

    // Add elements to content div
    content.appendChild(header);
    content.appendChild(restaurantInfo);
    content.appendChild(homeImage);
}

export { component };
