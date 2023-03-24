import { homeTabComponent } from "./homePage";
import { menuTabComponent } from "./menuPage";
import { aboutTabComponent } from "./aboutPage";

const content = document.getElementById("content");

homeTabComponent();

// Use event delegation - add event listener to parent element
function selectTab(e) {
    const clickedElement = e.target;

    // If the target is clicked, run component function
    if (clickedElement.matches(".home-tab")) {
        content.innerHTML = "";
        homeTabComponent();
    } else if (clickedElement.matches(".menu-tab")) {
        content.innerHTML = "";
        menuTabComponent();
    } else if (clickedElement.matches(".about-tab")) {
        content.innerHTML = "";
        aboutTabComponent();
    }
}

content.addEventListener("click", selectTab);
