function preloadContact() {
  if(document.location.hash == '#/contact'){
    var src = "/res/img/contact-bg.jpg";
    var $img = $( '<img src="' + src + '">' );
      $img.bind( 'load', function(){
      setTimeout(function(){
        $( '.particles-wrapper' ).css( 'background-image', 'url(' + src + ')' );
        $('.particles-wrapper').fadeIn(700);
      },500);
    });
    if( $img[0].width ){ $img.trigger( 'load' ); }
  } else {
    if(document.location.hash != '#/contact/m'){
      $('.particles-wrapper').fadeOut(200);
      setTimeout(function(){
        $( '.particles-wrapper' ).css( 'background-image', 'url()' );
      },700);
    }
  }
}
$(function(){
  setTimeout(function () {
    $('#sendBtn').click(function(){
      subject = $('#name').val()+" - "+$('#mail').val();
      body = $('#message').val();
      link = "mailto:timo.gafner@bwdbern.ch?subject="+subject+"&body="+body;
      var a = document.createElement('a');
      a.id = "send";
      a.href = link;
      document.body.appendChild(a);
      /*SEND EFFECT*/
      $('.cont-body').addClass('animated hinge');
      /*clear fields*/
      setTimeout(function () {
        $('#name').val('');
        $('#mail').val('');
        $('#message').val('');
        $('.cont-body').removeClass('animated hinge');
        $('.cont-body').addClass('animated bounceIn');
      }, 2500);
      setTimeout(function () {
        $('.cont-body').removeClass('animated bounceIn');
      }, 3500);
      //a.click();
    });
  }, 100);
});
