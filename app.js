// TOGGLING NAVIGATION MENU: 
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbartoggle");

function openMobileNavbar() {
    navbar.classList.add("opened");
    navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar () {
    navbar.classList.remove("opened");
    navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
    if (navbar.classList.contains("opened")) {
        closeMobileNavbar();
    } else {
        openMobileNavbar();
    }
})

// ALLOWING USER TO CLOSE NAVIGATION MENU WHEN CLICK ON .navbarmenu
// BUT NOT WHEN CLICKING ON .navbarlinks:
// COMMENTING OUT FOR NOW B/C NOT SURE THIS IS WORKING RIGHT:
//const navbarMenu = navbar.querySelector(".navbarmenu");
//const navbarLinksContainer = navbar.querySelector(".navbarlinks");

//navbarLinksContainer.addEventListener("click", (clickEvent) => {
//    clickEvent.stopPropagation();
//});

//navbarMenu.addEventListener("click", closeMobileNavbar);
