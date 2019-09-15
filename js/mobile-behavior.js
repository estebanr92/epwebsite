document.getElementById("mobile-menu-button").addEventListener("click", openMenu);
const mobileMenu = document.getElementById("mobile-menu");
const pageContainers = document.getElementsByClassName("page-container");


function openMenu() {
    mobileMenu.classList.toggle("hidden-section");

    console.log(pageContainers);

    for(let i = 0; i< pageContainers.length; i++) {
        pageContainers[i].classList.toggle("hidden-section");
    }

}