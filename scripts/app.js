import IMask from "imask";

import "/styles/app.css";
import "./custom-components.js";
import "./swiper.js"
import "./toggle.js"

document.addEventListener("DOMContentLoaded", () => {


    
    /* Set scrollbar size */

    function handleScrollbarSize() {
        const scrollbarSize = window.innerWidth - document.documentElement.clientWidth;

        document.documentElement.style.setProperty("--scrollbar-size", `${scrollbarSize}px`);
    }
    handleScrollbarSize();

    window.addEventListener("resize", function () {
        handleScrollbarSize();
    });

    /* Set scrollbar size end */

    /* Header */
    const header = document.querySelector("header.header");
    if (header && header.clientHeight) {
        // const headerHeight = header.clientHeight;

        function handleHeaderHeight() {
            const headerHeight = header.clientHeight;
            document.documentElement.style.setProperty(
                "--header-height",
                `${headerHeight}px`
            );
        }
        handleHeaderHeight();
        window.addEventListener("scroll", function () {
            handleHeaderHeight();
        });
    }

    /* Fixed header */
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 20) {
            header.classList.add("fixed-header");
        } else {
            header.classList.remove("fixed-header");
        }
    });
    /* Fixed header end */

    /* Header end */

    /* Gallery */
    // Fancybox.bind("[data-fancybox]");
    /* Gallery end */

    /* Phone mask */
    const phoneInputs = document.querySelectorAll(".phone-input");

    if (phoneInputs) {
        phoneInputs.forEach((phoneInput) => {
            new IMask(phoneInput, {
                mask: "+{998}(00)000-00-00",
                lazy: false,
            });
        });
    }
    /* Phone mask end */

    /* overlay toggle */

    const navItems = document.querySelectorAll("nav > ul > li");
    const overlay = document.querySelector(".overlay"); // добавь этот класс на div

    navItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            overlay.classList.remove("opacity-0", "invisible");
            overlay.classList.add("opacity-100", "visible");
        });
        item.addEventListener("mouseleave", () => {
            overlay.classList.remove("opacity-100", "visible");
            overlay.classList.add("opacity-0", "invisible");
        });
    });

    /* overlay toggle end */
});
