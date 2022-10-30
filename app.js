const menu_button = document.querySelector(".header__menuButton");
const close_button = document.querySelector(".closeButton");
const menu = document.querySelector(".header__links");
const backdrop = document.querySelector(".menu-backdrop");

const openMenuHandler = () => {
    menu_button.style.display = "none";
    close_button.style.display = "block";
    menu.classList.add("open");
    backdrop.style.visibility = "visible";
    document.body.style.overflow = "hidden";
};
const closeMenuHandler = () => {
    menu_button.style.display = "block";
    close_button.style.display = "none";
    menu.classList.remove("open");
    backdrop.style.visibility = "hidden";
    document.body.style.overflow = "auto";
};

menu_button.addEventListener("click", openMenuHandler);
close_button.addEventListener("click", closeMenuHandler);
backdrop.addEventListener("click", closeMenuHandler);
