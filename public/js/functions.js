document.addEventListener("DOMContentLoaded", () => {
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
    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
      
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < (windowHeight - elementVisible)) {
           
            reveals[i].classList.add("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
      if(window.innerHeight>1000){
        reveal()
      }
    
})