$(function(){
  setTimeout(function () {
    $('.circle-proj-wrapper').hover(function(){
      $(this).prev().addClass('hover');
    });
    $('.image-hover').mouseout(function(){
      $(this).removeClass('hover');
    });
    $('.circle-proj').click(function(){
      href = $(this).data('href');
      var win = window.open(href, '_blank');
      if (win) {
        //Browser has allowed it to be opened
        win.focus();
      } else {
      //Browser has blocked it
        alert('Please allow popups for this website');
      }
    });
  }, 200);
});
