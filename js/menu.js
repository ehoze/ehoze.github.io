const hamburger = document.querySelector('.header .nav_bar .nav_list .hamburger');
const mobile = document.querySelector('.header .nav_bar .nav_list ul');
const option = document.querySelectorAll('.header .nav_bar .nav_list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>
{
    hamburger.classList.toggle('active');
    mobile.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250)
    {
        header.style.backgroundColor = "#000";
    }
    else
    {
        header.style.backgroundColor = "transparent";
    }
})

option.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile.classList.toggle('active');
    });
});