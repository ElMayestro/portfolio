$(function(){
  initialize();
  fadeInG();
  glowG();
  onHashChange();
  if(hash2div().charAt(1) != "/"){
    switchFromMenu();
  }

  $mni.click(function(){
    if(hash2div() != "."+$(this).data('href')){
      switchFromMenu();
    }
  });

});
function initialize() {
  /*cashdom*/
  $mni = $('.main-nav-item');
  $mnl = $('.main-nav-link');
  $cont = $('.container');
  $G = $('.G');
  $menubar = $('.menubar');
  $writting = $('.writting');
}
function switchFromMenu() {
  $G.hide();
  closeContainer();
  hash = hash2div();
  setTimeout(function(){
  /*redo right left*/
  $cont.find('div').css("left","3%");
  $cont.find('div').css("right","3%");

  /*change active ul li*/
  $mnl.removeClass('active');
  var nact = "#nav-"+hash.replace('.', '');
  $(nact).addClass('active');

  $cont.find('div').hide();
  $(hash).show();
  openMenuBar();
  openContainer();

  }, 500);
}

function back2G(){
  $G.fadeIn();
}
function closeContainer() {
  $cont.animate({
    top: '100vh'
  }, function(){
    $cont.css("top","-100vh");
  });
}
function openContainer() {
  $cont.animate({
    top: '13%'
  }, 200, function(){
    $cont.find('div').animate({
      right: '0',
      left: '0'
    });
  });
}
function closeMenuBar() {
  $G.show();
  $menubar.animate({
    top:'-30%'
  });
}
function openMenuBar() {
  $menubar.animate({
    top:'0'
  });
}
function fadeInG() {
  var fitime = 500;
  $('.f1').fadeIn(fitime);
  $('.f2').delay(100).fadeIn(fitime);
  $('.f3').delay(200).fadeIn(fitime);
  $('.f4').delay(300).fadeIn(fitime);
  $('.f5').delay(400).fadeIn(fitime);
  $('.f6').delay(500).fadeIn(fitime);
  $('.f7').delay(600).fadeIn(fitime);
  $('.f8').delay(700).fadeIn(fitime);
  $('.f9').delay(800).fadeIn(fitime);
  $('.f10').delay(900).fadeIn(fitime);
  $('.f11').delay(1000).fadeIn(fitime);
  $('.f12').delay(1200).fadeIn(fitime);
  $('.f13').delay(1300).fadeIn(fitime);
  $('.f14').delay(500).fadeIn(fitime);
  $('.f15').delay(1500).fadeIn(fitime);
  $('.f16').delay(1600).fadeIn(fitime);
  $('.f17').delay(1700).fadeIn(fitime);
  $('.f18').delay(1800).fadeIn(fitime);
  $('.f19').delay(400).fadeIn(fitime);
  $('.f20').delay(1700).fadeIn(fitime);
  $('.f21').delay(700).fadeIn(fitime);
  $('.f22').delay(200).fadeIn(fitime);
  $('.f23').delay(1000).fadeIn(fitime);

  $('.ft1').delay(1900).fadeIn(500);
  $('.ft2').delay(2100).fadeIn(500);
  $('.ft3').delay(2300).fadeIn(500);
  $('.ft4').delay(2500).fadeIn(500);
  $('.ft5').delay(2700).fadeIn(500);
}
function glowG(){
  //GLOW EFFECT -----------------------------
  setTimeout(function(){ $writting.addClass('glow'); }, 3000);
  setTimeout(function(){ $writting.addClass('noglow'); }, 3600);
  setTimeout(function(){ $writting.removeClass('glow'); }, 4000);
  setTimeout(function(){ $writting.removeClass('noglow'); }, 4000);
}
function hash2div(hash) {
    var hash = window.location.hash;
    hash = "."+hash.replace('#', '').toLowerCase();
    return hash;
}
function onHashChange() {
  hash = hash2div();
  if(hash != '.'){
    if(hash.charAt(1) == "/") {
      hash = hash.replace('/', '');

      $cont.find('div').hide();
      $(hash).show();
      //change colored ul li
      $mnl.removeClass('active');
      var nact = "#nav-"+hash.replace('.', '');
      $(nact).addClass('active');

      openContainer();
      openMenuBar();
      $G.hide();
    }
  } else {
    closeContainer();
    closeMenuBar();
    back2G();
  }
}
