/* =================================
   LUXURY COFFEE SHOP
   Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       MOBILE MENU
    ================================ */

    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector(".main-nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");
            menuButton.classList.toggle("open");
        });
    }


    /* ================================
       CLOSE MOBILE MENU
       WHEN A LINK IS CLICKED
    ================================ */

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (nav) {
                nav.classList.remove("open");
            }

            if (menuButton) {
                menuButton.classList.remove("open");
            }
        });
    });


    /* ================================
       SMOOTH SCROLLING
    ================================ */

    navLinks.forEach(link => {
        link.addEventListener("click", event => {

            const target = link.getAttribute("href");

            if (target && target.startsWith("#")) {
                const section = document.querySelector(target);

                if (section) {
                    event.preventDefault();

                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }

        });
    });


    /* ================================
       HEADER SCROLL EFFECT
    ================================ */

    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });
    }


    /* ================================
       MENU ITEM HOVER EFFECT
    ================================ */

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {

        item.addEventListener("mouseenter", () => {
            item.classList.add("hovered");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
        });

    });


    /* ================================
       FADE-IN ON SCROLL
    ================================ */

    const revealElements = document.querySelectorAll(
        ".section, .menu-item, .about-content, .about-image"
    );

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    /* ================================
       MENU CATEGORY FILTER
    ================================ */

    const filterButtons = document.querySelectorAll(".menu-filter");
    const menuCards = document.querySelectorAll(".menu-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const category = button.dataset.category;

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            menuCards.forEach(card => {

                const cardCategory = card.dataset.category;

                if (
                    category === "all" ||
                    cardCategory === category
                ) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });


    /* ================================
       CURRENT YEAR
    ================================ */

    const year = document.querySelector(".current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ================================
       NEWSLETTER
    ================================ */

    const newsletterForm = document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", event => {

            event.preventDefault();

            const input = newsletterForm.querySelector("input");
            const button = newsletterForm.querySelector("button");

            if (!input || !button) return;

            if (input.value.trim() === "") {
                input.focus();
                return;
            }

            button.textContent = "Thank you";

            input.value = "";

            setTimeout(() => {
                button.textContent = "Subscribe";
            }, 2500);

        });

    }


    /* ================================
       BACK TO TOP
    ================================ */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        backToTop.addEventListener("click", event => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});
