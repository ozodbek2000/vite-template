const overlay = document.querySelector(".overlay");
const overlayPopup = document.querySelector(".overlay-popup");
const navLinks = document.querySelectorAll("nav > ul > li > a");
const langPopup = document.querySelector(".max-w-119\\.5");

// Scroll category list
document.querySelectorAll(".category-next").forEach((btn) => {
    btn.addEventListener("click", () => {
        const container = btn.closest(".container");
        const list = container.querySelector(".category-list");
        list.scrollBy({ left: 300, behavior: "smooth" });
    });
});

// Close all
function closeAll() {
    document.querySelectorAll("nav > ul > li > div").forEach((div) => {
        div.classList.remove("active");
    });
    document.querySelectorAll(".category-list > li > div").forEach((div) => {
        div.classList.remove("active");
    });
    navLinks.forEach((l) => l.classList.remove("active"));
    langPopup?.classList.remove("active");
    overlay.classList.add("invisible", "opacity-0");
    overlay.classList.remove("opacity-100", "visible");
}

// Close lang popup
function closePopup() {
    langPopup?.classList.remove("active");
    overlayPopup.classList.add("invisible", "opacity-0");
    overlayPopup.classList.remove("opacity-100", "visible");
}

// Open submenu on nav link click
navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const submenu = this.closest("li").querySelector(":scope > div");
        const isAlreadyActive = this.classList.contains("active");

        document.querySelectorAll("nav > ul > li > div").forEach((div) => {
            div.classList.remove("active");
        });
        navLinks.forEach((l) => l.classList.remove("active"));

        if (submenu && !isAlreadyActive) {
            submenu.classList.add("active");
            this.classList.add("active");
            overlay.classList.remove("invisible", "opacity-0");
            overlay.classList.add("opacity-100", "visible");
        } else {
            overlay.classList.add("invisible", "opacity-0");
            overlay.classList.remove("opacity-100", "visible");
        }
    });
});

// Open sub-submenu on mobile
document.querySelectorAll(".category-list > li > a").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const subSubmenu = this.closest("li").querySelector(":scope > div");

        document.querySelectorAll(".category-list > li > div").forEach((div) => {
            div.classList.remove("active");
        });

        if (subSubmenu) {
            subSubmenu.classList.add("active");
        }
    });
});

// close-submenu — closes only the current sub-submenu
document.querySelectorAll(".close-submenu").forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const subSubmenu = this.closest(".category-list li > div");
        if (subSubmenu) {
            subSubmenu.classList.remove("active");
        }
    });
});

// close — closes everything
document.querySelectorAll(".close").forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAll();
    });
});

overlay.addEventListener("click", closeAll);
overlayPopup.addEventListener("click", closePopup);

// Burger — open categories submenu
document.querySelectorAll(".header-burger").forEach((btn) => {
    btn.addEventListener("click", function () {
        const categoriesLink = document.querySelector("nav > ul > li:first-child > a");
        const categoriesSubmenu = document.querySelector("nav > ul > li:first-child > div");

        closeAll();

        if (categoriesSubmenu) {
            categoriesSubmenu.classList.add("active");
            categoriesLink.classList.add("active");
            overlay.classList.remove("invisible", "opacity-0");
            overlay.classList.add("opacity-100", "visible");
        }
    });
});

// Popup open
document.querySelectorAll(".popup-open").forEach((btn) => {
    btn.addEventListener("click", function () {
        langPopup?.classList.add("active");
        overlayPopup.classList.remove("invisible", "opacity-0");
        overlayPopup.classList.add("opacity-100", "visible");
    });
});

// Close popup
document.querySelectorAll(".close-popup").forEach((btn) => {
    btn.addEventListener("click", function () {
        closePopup();
    });
});