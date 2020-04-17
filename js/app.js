// Hamburger Menu Script

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
   
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation =''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();

//Project Page Split Scroll

function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '300%',
        triggerElement: '.project-title',
        triggerHook: 0
    })
    .setPin('.project-title')
    .addTo(controller);
}

splitScroll();