
// Wait until the HTML document has loaded
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // FOOTER: CURRENT COPYRIGHT YEAR
    // =====================================

    const yearSpan = document.getElementById("year");
    const modifiedSpan = document.getElementById("last-modified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // =====================================
    // FOOTER: LAST MODIFIED DATE
    // =====================================

    if (modifiedSpan) {
        const modifiedDate = new Date(document.lastModified);

        modifiedSpan.textContent =
            `${modifiedDate.toLocaleDateString()} ${modifiedDate.toLocaleTimeString()}`;
    }

    // =====================================
    // RESPONSIVE HAMBURGER MENU
    // =====================================

    const menuButton = document.getElementById("menu-toggle");
    const navList = document.getElementById("menu");

    if (menuButton && navList) {

        menuButton.addEventListener("click", function () {

            // Show or hide navigation links
            const isHidden = navList.classList.toggle("hidden");

            // Change hamburger icon
            menuButton.textContent = isHidden ? "☰" : "✕";

            // Update accessibility attributes
            menuButton.setAttribute("aria-expanded", !isHidden);

            menuButton.setAttribute(
                "aria-label",
                isHidden ? "Open navigation menu" : "Close navigation menu"
            );

        });

    }

});
