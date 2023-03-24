import "./style.css";
import Icon from "./home-image.jpg";

function homeTabComponent() {
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
    h1.textContent = "RESTAURANT";
    header.className = "header";
    headerTitle.className = "header-title";
    headerTitle.appendChild(h1);
    header.appendChild(headerTitle);

    // Header tabs
    homeTab.textContent = "HOME";
    homeTab.className = "tabs home-tab active";

    menuTab.textContent = "MENU";
    menuTab.className = "tabs menu-tab";

    aboutTab.textContent = "ABOUT";
    aboutTab.className = "tabs about-tab";

    // Add home image
    const homeImage = new Image();
    homeImage.src = Icon;
    homeImage.className = "home-image";

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
    const restaurantInfo = document.createElement("div");
    restaurantInfo.className = "home-info";
    restaurantInfo.innerHTML = `<h3>Welcome to our restaurant!</h3> 
    <p>We offer a diverse menu featuring fresh and locally sourced ingredients. Our skilled chefs prepare each dish with care, and our friendly staff is dedicated to providing you with a memorable dining experience. Whether you're in the mood for a hearty meal or a light bite, we have something to satisfy your appetite.</p>
    <p>Join us discover the flavors of our cuisine!</p>`;

    // Add elements to content div
    restaurantInfo.appendChild(homeImage);
    pageContainer.appendChild(restaurantInfo);

    content.appendChild(header);
    content.appendChild(pageContainer);
}

export { homeTabComponent };
