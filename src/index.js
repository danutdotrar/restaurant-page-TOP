import { homeTabComponent } from "./homePage";
import { menuTabComponent } from "./menuPage";
import { aboutTabComponent } from "./aboutPage";

const content = document.getElementById("content");

// Use event delegation - add event listener to parent element
function selectTab(e) {
    // If the target is clicked, run component function
    if (e.target.matches(".home-tab")) {
        content.innerHTML = "";
        homeTabComponent();
    } else if (e.target.matches(".menu-tab")) {
        content.innerHTML = "";
        menuTabComponent();
    } else if (e.target.matches(".about-tab")) {
        content.innerHTML = "";
        aboutTabComponent();
    }
}

content.addEventListener("click", selectTab);

homeTabComponent();
