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
const navbarMenu = navbar.querySelector(".navbarmenu");
navbarMenu.addEventListener("click", closeMobileNavbar);

// BUT NOT WHEN CLICKING ON .navbarlinks:
// COMMENTING OUT THIS PART FOR NOW B/C NOT SURE IT'S WORKING RIGHT:
//const navbarLinksContainer = navbar.querySelector(".navbarlinks");
//navbarLinksContainer.addEventListener("click", (clickEvent) => {
 //   clickEvent.stopPropagation();
//});



// PROJECTS CAROUSEL:


// END OF CAROUSEL