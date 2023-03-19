import Icon from "./home-image.jpg";

function component() {
    // Select content div
    const content = document.getElementById("content");

    // Create elements
    const header = document.createElement("div");
    const h1 = document.createElement("h1");
    const restaurantInfo = document.createElement("div");

    // Add header
    h1.textContent = "Restaurant Page";
    header.className = "header";
    header.appendChild(h1);

    // Add restaurant info
    restaurantInfo.className = "about-info";
    restaurantInfo.innerText =
        "Welcome to our restaurant! We offer a diverse menu featuring fresh and locally sourced ingredients. Our skilled chefs prepare each dish with care, and our friendly staff is dedicated to providing you with a memorable dining experience. Whether you're in the mood for a hearty meal or a light bite, we have something to satisfy your appetite. Join us for breakfast, lunch, or dinner and discover the flavors of our cuisine.";

    // Add home image
    const homeImage = new Image();
    homeImage.src = Icon;

    // Add elements to content div
    content.appendChild(header);
    content.appendChild(restaurantInfo);
    content.appendChild(homeImage);
}

export { component };
