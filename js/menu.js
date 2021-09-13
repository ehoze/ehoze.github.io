var menuButton = document.querySelector('.navmenu');
var menuBg = document.querySelector('.modal-bg');
var menuClose = document.querySelector('.modal-close');

menuButton.addEventListener('click', function() {
    menuBg.classList.add('bg-active');
    document.querySelector('.fa-caret-square-down').style.transform = "rotate(180deg)";
});


menuClose.addEventListener('click', function() {
    menuBg.classList.remove('bg-active');
    document.querySelector('.fa-caret-square-down').style.transform = "rotate(0deg)";
});