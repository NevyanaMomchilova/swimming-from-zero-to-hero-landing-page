// Change the hero-navigation background color when scrolling down and up

const heroNavigation = document.querySelector(".hero-navigation");
const heroLogo = document.querySelector(".hero-logo");
const heroLayer = document.querySelector(".hero-layer");
const heroBg = document.querySelector(".hero-bg");
const heroBgOptions = {
    rootMargin: "-90% 0% 0% 0%"
};

const heroBgObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            heroNavigation.classList.add("hero-navigation-nav-scrolled");
            heroLogo.classList.add("hero-logo-nav-scrolled");
            heroLayer.classList.add("hero-layer-nav-scrolled");
        } else {
            heroNavigation.classList.remove("hero-navigation-nav-scrolled");
            heroLogo.classList.remove("hero-logo-nav-scrolled");
            heroLayer.classList.remove("hero-layer-nav-scrolled");
        }
    })
}, heroBgOptions);

heroBgObserver.observe(heroBg);


// Hamburger Menu - open and close
const hamburger = document.getElementsByClassName("hamburger")[0];
const heroMenu = document.getElementsByClassName("hero-menu")[0];
const heroMenuItems = Array.from(document.getElementsByClassName("hero-menu-item"));

hamburger.addEventListener("click", () => {
    heroLayer.classList.toggle("active");
    heroMenu.classList.toggle("active");
});

heroMenuItems.forEach(heroMenuItem => {
    heroMenuItem.addEventListener("click", () => {
        heroLayer.classList.toggle("active");
        heroMenu.classList.toggle("active");
    });
});


