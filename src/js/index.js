import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import slick from "slick-carousel"
import {TweenMax, TimelineLite, TweenLite, TimelineMax} from "gsap/TweenMax";


$(function() {
  console.log('[INDEX.JS]')
  const sliderObj = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  $('.slider').each(function () {
    $(this).slick(sliderObj);
  });

  // window on scroll
  $(window).scroll(function() {
    const scroll = $(this).scrollTop();
    const header = $(".header_scroll");
  
    header[scroll >= 200 ? "addClass" : "removeClass"]("active");
   
    // if(scroll > $('.exteta_2').offset().top - 500) {
    //   function mask() {
    //     $('.exteta_2 .js_width_from_0').each(function(i) {
    //       $('.js_width_from_0').addClass('js_active')
    //     })

    //     setTimeout(function(){ 
    //       $('.exteta_2 .el_mask').each(function(i) {
    //         $(this).addClass('active');
    //       });
    //     }, 300);
    //   }

    //   mask();
    // }
    
  });

  // // animationexamples
  // $('.animation_1__example').click(function() {
  //   $(this).addClass('active')
  // })
  

  // $('.animation_example__link').hover(function(){
  //   $('.stoca').each(function(i) {
  //     setTimeout(function() {
  //       $('.stoca').eq(i).toggleClass('active')
  //     }, 50 * (i + 1))
  //   })
  // })
});





// Video YouTube

function findVideos() {
	let videos = document.querySelectorAll('.video');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let media = video.querySelector('.video__media');
	let button = video.querySelector('.video__btn');
	let id = parseMediaURL(media);

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	video.classList.add('video--enabled');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);

	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();