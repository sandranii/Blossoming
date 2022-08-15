// =====NAV mainMenu Dropdown=====

window.addEventListener("load", function(){
    let mainMenuDropdown = document.getElementById("mainMenuDropdown");
    let expandMore = document.getElementById("expandMore");
    let dropdownNav = document.getElementById("dropdownNav");

    mainMenuDropdown.onclick= function(){
        expandMore.classList.toggle("arrow-up");
        dropdownNav.classList.toggle("DB");
    }
});


