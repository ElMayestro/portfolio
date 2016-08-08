$(function(){
  setTimeout(
    function()
    {
      $welcMessage.fadeOut();
      $('.welcome').fadeOut();
    }, 7000);
  setTimeout(
    function()
    {
      $terminal.fadeIn();
      $display.fadeIn();
    }, 8000);
  $welcMessage.typed({
    strings: ["Welcome...", "This  is a Website by", "Timo Gafner"],
    typespeed: 0
  });
});
