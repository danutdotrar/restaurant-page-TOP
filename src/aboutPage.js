import Icon from "./about-image.jpg";

function aboutTabComponent() {
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
    h1.textContent = "ABOUT";
    header.className = "header";
    headerTitle.className = "header-title";
    headerTitle.appendChild(h1);
    header.appendChild(headerTitle);

    // Header tabs
    homeTab.textContent = "HOME";
    homeTab.className = "tabs home-tab";

    menuTab.textContent = "MENU";
    menuTab.className = "tabs menu-tab";

    aboutTab.textContent = "ABOUT";
    aboutTab.className = "tabs about-tab active";

    // Add home image
    const aboutImage = new Image();
    aboutImage.src = Icon;
    aboutImage.className = "about-image";
    header.appendChild(aboutImage);

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
    const aboutInfo = document.createElement("div");
    aboutInfo.className = "about-info";
    aboutInfo.innerHTML = `<p>At our restaurant, we are passionate about creating exceptional dining experiences for our guests. From the moment you walk through our doors, you'll be greeted by a warm and welcoming atmosphere, and a team of professionals who are dedicated to making your visit unforgettable.</p>
        <p>Our culinary team is led by experienced chefs who have a passion for cooking with fresh and locally sourced ingredients. They bring a creative flair to classic dishes, and are always experimenting with new flavors and techniques to offer our guests an ever-evolving menu.
        We believe that great food should be enjoyed with great company, and that's why we've created a space that's perfect for sharing meals with family and friends. Whether you're celebrating a special occasion, or just looking for a night out, our restaurant provides the ideal backdrop for your next dining experience.</p>`;

    // Add elements to content div
    pageContainer.appendChild(aboutInfo);
    // pageContainer.appendChild(homeImage);

    content.appendChild(header);
    content.appendChild(pageContainer);
}

export { aboutTabComponent };
