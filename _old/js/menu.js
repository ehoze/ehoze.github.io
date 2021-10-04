var menuButton = document.querySelector('.navmenu');
var menuBg = document.querySelector('.modal-bg');
var menuClose = document.querySelector('.modal-close');
var sitebody = document.body;

menuButton.addEventListener('click', function() {
    menuBg.classList.add('bg-active');
    sitebody.classList.add('blur');
    document.querySelector('.fa-caret-square-down').style.transform = "rotate(180deg)";
});


// menuButton.addEventListener(''), function() {
//     menuBg.classList.remove('bg-active');
//     sitebody.classList.remove('blur');
//     document.querySelector('.fa-caret-square-down').style.transform = "rotate(0deg)";
// });

menuClose.addEventListener('click', function() {
    menuBg.classList.remove('bg-active');
    sitebody.classList.remove('blur');
    document.querySelector('.fa-caret-square-down').style.transform = "rotate(0deg)";
});

menuBg.addEventListener('click', function(){
    menuBg.classList.remove('bg-active');
    sitebody.classList.remove('blur');
    document.querySelector('.fa-caret-square-down').style.transform = "rotate(0deg)";
});