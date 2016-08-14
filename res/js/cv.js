$(function(){
  setTimeout(function(){

    $('.cv').mousewheel(function(){
      var status = $('.cv').data('status');
      if(status != 'executing'){
        $('.cv').data('status', 'executing');
        setTimeout(function () {
          $('.cv').data('status','');
        }, 2000);
        var isFirst = true;
        $('.image-wrapper').children().each(function(){
          if($(this).css('display') != 'none'){
            isFirst = false;
          }
        });
        if(isFirst){
          $('.prim-circle').click();
          console.log('First');
        } else {
          div = $('.linkCircle.activePage').next().data('circle');
          if(div != undefined){
            $('.'+div+'-circle').click();
          } else {
            $('.prim-circle').click();
          }
        }
      }
    });

    $('.linkCircle').click(function(e){
      e.preventDefault();
      var actIndetifier = this.className.substr(this.className.length - 10);
      if(actIndetifier != "activePage"){
        $('.linkCircle').removeClass('activePage');
        var circleLink = ".circle-"+$(this).data('circle');
        if($('.circle-cv').css('display') == 'block'){
          cvRight(circleLink);
        } else {
          newCont(circleLink);
        }
        $(this).addClass('activePage');
      }
    });


  },200);
});

function cvRight(newCircle) {
  $('.intro-content-wrapper').addClass('cont-wrapper');
  $('.cont-wrapper-acitve').fadeIn(400);
  setTimeout(function(){
    $('.intro-content-wrapper ').css('left','7.5');
    $('.cont-wrapper-acitve').css('left','7.5');
    $('.intro').animate({
      left: '50vw',
      right: '0'
    }, 600, function(){
      $('.circle-cv').animate({
        left: '100%'
      }, function(){
        $('.circle-cv').hide();
      });
      $(newCircle).show();
      $(newCircle).animate({
        opacity: '1',
        left: '0',
        right: '0',
      });
      setTimeout(function () {
        changeImgLeft(newCircle);
      }, 200);
    });
  },300);
}

function newCont(newCircle) {
  $activeCircle = $('.circle-cont:visible');
  $newCircle = $(newCircle);

  /*active out*/
  $activeCircle.animate({
    opacity: '0',
    left: '500'
  }, 600, function(){
    $activeCircle.hide();
    $activeCircle.css('left','-500');
  });
  /*new in*/
  setTimeout(function() {
    $(newCircle).show();
    $(newCircle).animate({
      opacity: '1',
      left: '0',
      right: '0',
    });
    setTimeout(function () {
      changeImgLeft(newCircle);
    }, 200);
  }, 300);
}

function changeImgLeft(img) {
  $newImg = $("."+img.replace('.circle-',''));
  $oldImg = $('.image-wrapper div:visible');

  if($oldImg.length != 0){
    $oldImg.addClass('animated slideOutDown');
    $newImg.show();
    $newImg.addClass('animated slideInDown');
    setTimeout(function () {
      $oldImg.hide();
      $oldImg.removeClass('animated slideOutDown');
      $newImg.removeClass('animated slideInDown');
    }, 1000);
  } else {
    $newImg.show();
    $newImg.addClass('animated slideInDown');
    setTimeout(function () {
      $newImg.removeClass('animated slideInDown');
    }, 1000);
  }
}
