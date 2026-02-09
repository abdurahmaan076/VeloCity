let menuOpen = false;

function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    
    if (menuOpen === false) {
        sideMenu.style.width = "350px";
        menuOpen = true;
    } else {
        sideMenu.style.width = "0";
        menuOpen = false;
    }
}
