const hamburger = document.querySelector('.header .nav_bar .nav_list .hamburger');
const mobile = document.querySelector('.header .nav_bar .nav_list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>
{
    hamburger.classList.toggle('active');
});