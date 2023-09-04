let navbar_toggler = document.querySelector('.navbar_toggler')

navbar_toggler.addEventListener('click' , function () {
    let navbar_mabil = document.querySelector('.navbar_mabil')
    navbar_mabil.classList.remove('navbar_mabil-exit')
})
let header_exit = document.querySelector('.header_exit')
header_exit.addEventListener('click' , function () {
    let navbar_mabil = document.querySelector('.navbar_mabil')
    navbar_mabil.classList.add('navbar_mabil-exit')

})
window.addEventListener('scroll' , function () {
    let navbar_mabil = document.querySelector('.navbar_mabil')
    navbar_mabil.classList.add('navbar_mabil-exit')
})

let fotogalareya_img = document.querySelectorAll('.fotogalareya img');
fotogalareya_img.forEach(item => {

});


const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });
  