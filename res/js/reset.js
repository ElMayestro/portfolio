function reset(div) {
  switch (div) {
    case ".timo":
      $('.gif').css('background-image','');
      $('.closeInfo').hide();
      $(".circle").flip(false);
      $('.circle').css('cursor','pointer');
      $('.profile').addClass('animated zoomOut');
      $('.profile').removeClass('rotateIn');
      $('.blur-video').removeClass('bg-blur');
      $('.bday').addClass('animated zoomOut');
      $('.bday').removeClass('rotateIn');
      $('.mail').addClass('animated zoomOut');
      $('.mail').removeClass('rotateIn');
      $('.infocircle').css('display','none');
      $('.mail').removeClass('zoomOut');
      $('.bday').removeClass('zoomOut');
      $('.profile').removeClass('zoomOut');
      break;
    case ".cv":
      $('.linkCircle').removeClass('activePage');
      $('.intro-content-wrapper').removeClass('cont-wrapper');
      $('.cont-wrapper-acitve').hide();
      $('.intro-content-wrapper ').css('left','');
      $('.cont-wrapper-acitve').css('left','');
      $('.intro').css({'left': '','right': ''});
      $('.intro-content-wrapper').css('left','');

      $('.circle-cv').css('left','');
      $('.circle-cv').show();
      $('.circle-cont').hide();
      $('.image-wrapper div').hide();
      $('.circle-cont').css({'opacity': '','left': '','right': '',
      });
      break;
    case ".contact":
      preloadContact();
      particlesJS.load('particles-js', '/res/js/particles.json', function() {
        setTimeout(function () {
          $('.contact-bg').animate({opacity: '1'}, 1000);
        }, 1000);
        setTimeout(function () {
          $('.js-count-particles').change(function() {
            console.log('test');
          });
        }, 2000);
      });
      break;
  }
}
