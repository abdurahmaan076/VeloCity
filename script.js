let menuOpen = false;

function toggleMenu() {
    const menu = document.getElementById("side-menu");
    if (!menuOpen) {
        menu.style.width = "320px"; 
        menuOpen = true;
    } else {
        menu.style.width = "0";
        menuOpen = false;
        document.getElementById("brand-list").style.display = "none";
        document.getElementById("arrow").style.transform = "rotate(0deg)";
    }
}

function toggleProducts() {
    const list = document.getElementById("brand-list");
    const arrow = document.getElementById("arrow");
    if (list.style.display === "block") {
        list.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        list.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}
