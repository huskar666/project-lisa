document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileNav = document.querySelector(".mobile-nav");

    burgerMenu.addEventListener("click", function() {
        mobileNav.classList.toggle("open");
    });
});
