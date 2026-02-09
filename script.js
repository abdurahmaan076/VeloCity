function toggleMenu() {
    const menu = document.getElementById("side-menu");
    
    // Check of het menu dicht is (breedte 0 of nog niet ingesteld)
    if (menu.style.width === "350px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "350px";
    }
}
