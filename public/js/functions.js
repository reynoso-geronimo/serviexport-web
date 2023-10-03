document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
    });


    const subMenu = document.getElementById("subMenu")

    const menu = document.querySelector(".fa-bars")
   
    menu.addEventListener('click',()=>{
        console.log('hola')
     subMenu.classList.toggle("open-menu")
    })
    
    
})