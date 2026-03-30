document.querySelectorAll(".category-next").forEach((btn) => {
    btn.addEventListener("click", () => {
        const container = btn.closest(".container");
        const list = container.querySelector(".category-list");
        list.scrollBy({ left: 300, behavior: "smooth" });
    });
});

const overlay = document.querySelector(".overlay");

document.querySelectorAll("nav > ul > li > a").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const submenu = this.closest("li").querySelector(":scope > div");

        document.querySelectorAll("nav > ul > li > div").forEach((div) => {
            div.classList.remove("active");
        });

        if (submenu) {
            submenu.classList.add("active");
            overlay.classList.add("opacity-100", "visible");
        }
    });
});

document.querySelectorAll(".close").forEach((btn) => {
    btn.addEventListener("click", function () {
        document.querySelectorAll("nav > ul > li > div").forEach((div) => {
            div.classList.remove("active");
        });
        overlay.classList.add("invisible", "opacity-0");
        overlay.classList.remove( "opacity-100");
    });
});
