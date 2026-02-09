let menuOpen = false;

// Opent en sluit het hoofdmenu (hamburger)
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    if (!menuOpen) {
        menu.style.width = "280px"; // Smaller menu
        menuOpen = true;
    } else {
        menu.style.width = "0";
        menuOpen = false;
        
        // Zorg dat de dropdown ook sluit als het menu dichtgaat
        const brandList = document.getElementById("brand-list");
        brandList.style.display = "none";
        document.getElementById("arrow").style.transform = "rotate(0deg)";
    }
}

// Opent en sluit de merkenlijst (Producten)
function toggleProducts() {
    const brandList = document.getElementById("brand-list");
    const arrow = document.getElementById("arrow");

    if (brandList.style.display === "block") {
        brandList.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        brandList.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}
