$(function(){
  /*circle flip*/
  setTimeout(function(){
    $('.circle').flip({
      trigger: 'manual'
    });
    $('.circle').hover(function(){
      $('.blur-video').css('background-color','rgba(0,0,0,0.8)');
    }, function(){
      $('.blur-video').css('background-color','rgba(0,0,0,0.5)');
    });

    $('#hi2').click(function(){
      showHi();
    });

    $('.ci').click(function(){
      showHi();
    });

    $('.profile').click(function(){
      showProfile();
    });






    $('.circle').flip(false);
    $('.circle').click(function(){
      $('.blur-video').addClass('bg-blur');
      $('.infocircle').css('display','block');
      /*FLIP*/
      $(".circle").flip(true);
      $('.circle').css('cursor','default');
      /*X FADE IN*/
      setTimeout(function(){
        $('.closeInfo').fadeIn(400);
      },200);
      /*DISPLAY infocircles*/
      setTimeout(function(){
        $('.profile').addClass('animated rotateIn');
        $('.profile').removeClass('zoomOut');
      },300);
      setTimeout(function(){
        $('.bday').addClass('animated rotateIn');
        $('.bday').removeClass('zoomOut');
      },400);
      setTimeout(function(){
        $('.mail').addClass('animated rotateIn');
        $('.mail').removeClass('zoomOut');
      },500);
    });
    $('.closeInfo').click(function(){
      /*CLOSE X*/
      $('.closeInfo').fadeOut(200);
        /*FLIP*/
      setTimeout(function(){
        $(".circle").flip(false);
        $('.circle').css('cursor','pointer');
      },200);
      /*HIDE infocircles*/
      setTimeout(function(){
        $('.profile').addClass('animated zoomOut');
        $('.profile').removeClass('rotateIn');
        $('.blur-video').removeClass('bg-blur');
      },500);
      setTimeout(function(){
        $('.bday').addClass('animated zoomOut');
        $('.bday').removeClass('rotateIn');
      },400);
      setTimeout(function(){
        $('.mail').addClass('animated zoomOut');
        $('.mail').removeClass('rotateIn');
      },300);
      setTimeout(function(){
        $('.infocircle').css('display','none');
        $('.mail').removeClass('zoomOut');
        $('.bday').removeClass('zoomOut');
        $('.profile').removeClass('zoomOut');
      }, 800);
    });
  },300);
});

function preloadTurntable() {
  if(document.location.hash == '#/timo'){
    var src = "/res/img/turntable.gif";
    var $img = $( '<img src="' + src + '">' );
      $img.bind( 'load', function(){
      setTimeout(function(){
        $( '.gif' ).css( 'background-image', 'url(' + src + ')' );
        $('.gif').fadeIn(700);
      },500);
    });
    if( $img[0].width ){ $img.trigger( 'load' ); }
  } else {
    if(document.location.hash != '#/timo/m'){
      $('.gif').fadeOut(200);
      setTimeout(function(){
        $( '.gif' ).css( 'background-image', 'url()' );
      },700);
    }
  }
}
function showProfile() {
    $('.profile').animate({
      height: '295',
      width: '295',
      left: '-200',
      top: '-100',
    });
    $('.profile').css('cursor','default');
    $('.circle').css('cursor','pointer');
    $('.closeInfo').fadeOut(100);


    $('.circle p').not('.hi').fadeOut(100);
    setTimeout(function(){
      $('#hi1').hide();
      $('#hi2').show();
    }, 200);
    setTimeout(function(){
      $('.ci').fadeIn(400);
    }, 400);
    $('.circle').animate({
      height: '112',
      width: '112',
      top: '100',
      cursor: 'pointer'
    });
}
function showHi() {
    $('.profile').css('cursor','pointer');
    $('.circle').css('cursor','default');
    $('.ci').fadeOut(100);

    $('.profile').animate({
      height: '112',
      width: '112',
      left: '0',
      top: '0',
    });
    $('.circle').animate({
      height: '295',
      width: '295',
      top: '0',
    }, function(){
      $('.closeInfo').fadeIn(400);
      $('.circle p').not('.hi').fadeIn(400);
    });
    setTimeout(function(){
      $('#hi1').show();
      $('#hi2').hide();
    }, 200);
}
