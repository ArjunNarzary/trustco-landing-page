const hamburgerMenu = document.getElementById("menu-btn");
const smNavItems = document.getElementById("sm-nav-list");

hamburgerMenu.addEventListener("click", () => {
    if (smNavItems.style.display === "none" || smNavItems.style.display === "") {
        smNavItems.style.display = "block";
    } else {
        smNavItems.style.display = "none";
    }
});

