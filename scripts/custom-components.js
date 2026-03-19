document.addEventListener("DOMContentLoaded", () => {
    /* Custom tabs */
    const customTabsWrappers = document.querySelectorAll(".custom-tabs");
    function handleCustomTabs(tabsWrapper) {
        if (tabsWrapper) {
            const tabs = tabsWrapper.querySelectorAll(".tab");
            const tabBtns = tabsWrapper.querySelectorAll(".tab-btn");

            tabBtns.forEach((tabBtn, id) => {
                tabBtn.addEventListener("click", () => {
                    tabBtns.forEach((el) => el.classList.remove("active"));
                    tabs.forEach((el) => el.classList.remove("active"));

                    tabBtn.classList.add("active");
                    tabs[id].classList.add("active");
                });
            });
        }
    }
    if (customTabsWrappers.length > 0) {
        customTabsWrappers.forEach((tabsWrapper) => {
            handleCustomTabs(tabsWrapper);
        });
    }
    /* Custom tabs end */

    /* Accordion with animation */
    function handleAnimationAccordion(selector, isSingle = false) {
        const accordions = document.querySelectorAll(selector);
        if (accordions) {
            accordions.forEach((accordion) => {
                const accordionPadding =
                    Number(getComputedStyle(accordion).getPropertyValue("--accordion-padding").replace("rem", "")) * 16;
                const btn = accordion.querySelector(".btn");
                const content = accordion.querySelector(".content");

                if (accordion.classList.contains("open")) {
                    content.style.maxHeight = content.scrollHeight + accordionPadding + "px";
                }

                btn.addEventListener("click", () => {
                    if (isSingle) {
                        accordions.forEach((acc) => {
                            if (acc !== accordion && acc.classList.contains("open")) {
                                acc.classList.remove("open");
                                acc.querySelector(".content").style.maxHeight = "0px";
                            }
                        });
                    }

                    if (accordion.classList.contains("open")) {
                        content.style.maxHeight = "0px";
                    } else {
                        content.style.maxHeight = content.scrollHeight + accordionPadding + "px";
                    }
                    accordion.classList.toggle("open");
                });
            });
        }
    }

    // handleAnimationAccordion(".questions .animation-accordion", true);
    /* Accordion with animation end*/

    /* Accordion */
    function handleAccordion(selector) {
        const accordions = document.querySelectorAll(selector);
        if (accordions) {
            accordions.forEach((accordion) => {
                const btn = accordion.querySelector(".btn");

                btn.addEventListener("click", () => {
                    accordion.classList.toggle("hide");
                });
            });
        }
    }

    // handleAccordion(".filters-wrapper .accordion");
    /* Accordion end */

    /* Accordion with nesting */
    const accordionWithNesting = document.querySelectorAll(".accordion-with-nesting");
    const accordionWithNestingBtns = document.querySelectorAll(".accordion-with-nesting .btn");

    if (accordionWithNestingBtns.length > 0) {
        accordionWithNestingBtns.forEach((btn, btnId) => {
            btn.addEventListener("click", function () {
                const accordion = accordionWithNesting[btnId];

                accordion.classList.toggle("open");
            });
        });
    }

    /* Accordion with nesting */

    /* Custom select */
    function handleSelect(wrappers) {
        if (wrappers && wrappers.length > 0) {
            wrappers.forEach((wrapper) => {
                const btn = wrapper.querySelector(".btn");
                const menu = wrapper.querySelector(".menu");

                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    const isOpen = wrapper.classList.toggle("open");

                    btn.setAttribute("aria-expanded", isOpen);
                    menu.setAttribute("aria-hidden", !isOpen);
                });
            });

            window.addEventListener("click", (e) => {
                wrappers.forEach((wrapper) => {
                    const btn = wrapper.querySelector(".btn");
                    const menu = wrapper.querySelector(".menu");

                    if (!wrapper.contains(e.target) && e.target !== wrapper) {
                        wrapper.classList.remove("open");

                        btn.setAttribute("aria-expanded", "false");
                        menu.setAttribute("aria-hidden", "true");
                    }
                });
            });
        }
    }

    const langSelectWrappers = document.querySelectorAll(".lang-select-wrapper");

    handleSelect(langSelectWrappers);
    /* Custom select */

    /* Dialogs */
    function openDialog(dialog) {
        dialog.showModal();
        dialog.removeAttribute("inert");
    }
    function closeDialog(dialog) {
        dialog.close();
        dialog.setAttribute("inert", "");
    }
    function handleDialog(dialog, showBtns, dialogForChange) {
        if (dialog) {
            const closeButton = dialog.querySelector(".close-btn");
            const changeDialogBtn = dialog.querySelector(".change-dialog-btn");
            if (showBtns) {
                showBtns.forEach((btn) => {
                    btn.addEventListener("click", () => openDialog(dialog));
                });
            }
            if (closeButton) {
                closeButton.addEventListener("click", () => closeDialog(dialog));
            }
            dialog.addEventListener("click", (e) => {
                if (dialog == e.target) closeDialog(dialog);
            });
            if (changeDialogBtn && dialogForChange) {
                changeDialogBtn.addEventListener("click", () => {
                    closeDialog(dialog);
                    setTimeout(() => {
                        openDialog(dialogForChange);
                    }, 50);
                });
            }
        }
    }

    const headerMenuDialog = document.querySelector(".header-menu-dialog");
    const headerMenuBtns = document.querySelectorAll(".header-menu-btn");

    handleDialog(headerMenuDialog, headerMenuBtns);
    /* Dialogs end */

    /* Password input */
    const passwordInputWrappers = document.querySelectorAll(".password-input-wrapper");
    if (passwordInputWrappers) {
        passwordInputWrappers.forEach((passwordInputWrapper) => {
            const showBtn = passwordInputWrapper.querySelector(".show-password-btn");
            const passwordInput = passwordInputWrapper.querySelector("input");

            let isShow = false;

            function showPassword() {
                passwordInput.setAttribute("type", "text");
                passwordInputWrapper.classList.add("show");
                isShow = true;
            }
            function hidePassword() {
                passwordInput.setAttribute("type", "password");
                passwordInputWrapper.classList.remove("show");
                isShow = false;
            }

            showBtn.addEventListener("click", (e) => {
                if (!isShow) {
                    showPassword();
                } else {
                    hidePassword();
                }
            });
        });
    }
    /* Password input end */

    /* Scroll to top btn */
    const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

    function handleScrollTopBtn() {
        if (window.scrollY > 100) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    }

    window.addEventListener("scroll", function () {
        handleScrollTopBtn();
    });
    handleScrollTopBtn();
    /* Scroll to top btn end */

    /* Animation from zero to number */
    const numbers = document.querySelectorAll(".counter");

    const options = {
        threshold: 0.5,
    };

    const totalDuration = 2000;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.counter.split(" ")[0]);
                animateValue(entry.target, target, totalDuration);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    numbers.forEach((number) => {
        observer.observe(number);
    });

    function animateValue(element, end, duration) {
        let startTime = null;

        function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const increment = (end / duration) * progress;

            element.textContent = Math.min(increment, end).toFixed(0);

            if (progress < duration) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = end;
            }
        }

        requestAnimationFrame(updateCounter);
    }
    /* Animation from zero to number end */

    /* Cut list */
    const cutListWrappers = document.querySelectorAll(".cut-list-wrapper");

    function handleCutList(listItems, isHidden, quantity) {
        listItems.forEach((item, id) => {
            if (isHidden) {
                if (id < quantity) {
                    item.style.display = "list-item";
                } else {
                    item.style.display = "none";
                }
            } else {
                item.style.display = "list-item";
            }
        });
    }
    if (cutListWrappers.length > 0) {
        cutListWrappers.forEach((wrapper) => {
            let isHidden = true;
            const quantity = Number(wrapper.dataset.quantity);
            const listItems = wrapper.querySelectorAll(".list li");
            const btn = wrapper.querySelector(".btn");

            handleCutList(listItems, isHidden, quantity);
            if (isHidden) {
                wrapper.classList.add("hide");
            }

            btn.addEventListener("click", () => {
                isHidden = !isHidden;
                if (isHidden) {
                    wrapper.classList.add("hide");
                } else {
                    wrapper.classList.remove("hide");
                }
                handleCutList(listItems, isHidden, quantity);
            });
        });
    }
    /* Cut list end */

    /* Cut text */
    const textBlockWrappers = document.querySelectorAll(".text-block-wrapper");

    if (textBlockWrappers.length > 0) {
        textBlockWrappers.forEach((wrapper) => {
            let isHidden = true;
            const btn = wrapper.querySelector(".btn");

            if (isHidden) {
                wrapper.classList.add("hide");
            }
            btn.addEventListener("click", () => {
                isHidden = !isHidden;
                if (isHidden) {
                    wrapper.classList.add("hide");
                } else {
                    wrapper.classList.remove("hide");
                }
            });
        });
    }
    /* Cut text end */

    /* Radio inputs with target (when click on radio target is appear) */
    const targetsInputGroups = document.querySelectorAll(".targets-input-group");
    if (targetsInputGroups) {
        targetsInputGroups.forEach((group) => {
            const radioInputs = group.querySelectorAll(".custom-radio input[type='radio']");

            radioInputs.forEach((input) => {
                input.addEventListener("change", (e) => {
                    const allTargetItems = group.querySelectorAll(`[data-target-item]`);
                    allTargetItems.forEach((item) => {
                        item.classList.remove("!flex");
                    });
                    const target = input.dataset.target;
                    if (target) {
                        const targetElement = group.querySelector(`[data-target-item="${target}"]`);
                        if (input.checked) {
                            targetElement.classList.add("!flex");
                        }
                    }
                });
            });
        });
    }
    /* Radio inputs with target end */

    /* Custom scrollbar */
    // import SimpleBar from "simplebar";
    // import "/node_modules/simplebar/dist/simplebar.css";

    const scrollbarWrappers = document.querySelectorAll(".custom-scrollbar");

    if (scrollbarWrappers) {
        scrollbarWrappers.forEach((wrapper) => {
            new SimpleBar(wrapper, { autoHide: false });
        });
    }
    /* Custom scrollbar end */
});
