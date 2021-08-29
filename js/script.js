$(document).ready(function () {
  if (outerWidth >= 1025 ) {
    $('.slider').slick({
      infinite: true,
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 3500,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '20%',
      prevArrow: $('.slider__btn-prev'),
      nextArrow: $('.slider__btn-next')

    });
  } else {
    $('.slider').slick({
      infinite: true,
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 3500,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slider__btn-prev'),
      nextArrow: $('.slider__btn-next')
    });
  }
});


const formCheck = document.querySelector('.footer__form-checkbox');
const formtel = document.querySelector('.footer__form-tel');

// const gallery_item = document.querySelectorAll('.sale__gallery-item');
// const gallery_img = document.querySelectorAll('.sale__gallery-img');
// const photo_quad = document.querySelector('.photo__quad');

// for (let index = 0; index < gallery_item.length; index++) {
//   const item = gallery_item[index];

//     item.addEventListener('click',()=>{
//     photo_quad.innerHTML = item.innerHTML;
//     photo_quad.style.display = 'block';


//     gallery_img.forEach(item =>{
//       item.style.display = 'block';
//       item.style.width = 100+'%';
//       item.style.borderRadius = 40+'px'
//     })

//   });   

// }



formCheck.addEventListener('click', () => {
  formCheck.classList.toggle('active');
}, {passive: true});