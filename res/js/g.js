$(function(){
  initialize();

  getDivContent();


  var hash = window.location.hash;
  if(hash == "#/" || hash == "#" || hash == ""){
    console.log('home');
    fadeInG();
    glowG();
    $G.removeClass('nm');
  } else {
    $G.hide();
    onHashChange();
    $G.find('*').show();
  }

  /*blur all when hover*/
  $gTopic.hover(function(){
    $G.find('.topic').not(this).addClass('dormant');
    $G.find('.writting').addClass('dormant');
  }, function(){
    $G.find('.topic').removeClass('dormant');
    $G.find('.writting').removeClass('dormant');
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
  $gTopic = $('.topic');

  /*variables*/
  magicIn = "magictime vanishIn";
  magicOut = "magictime vanishOut";
}

function getDivContent() {
  $cont.children().each(function() {
    className = this.className.replace('content ', '');
    var php = '/dir/'+className+".php";
    var div = '.'+className;
    $.ajax({
        url: php,
        type: 'get',
        async: true,
        success: function(content) {
          $(div).append(content);
        }
    });
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
function openContainer() {
  $cont.animate({
    top: '13%'
  }, 400);
}
function openMenuBar() {
  $menubar.animate({
    top: '0'
  });
}
function closeContainer() {
  $G.hide();
  $cont.animate({
    top: '100vh'
  }, function(){
    $cont.css('top','-100vh');
  });
}
function closeMenuBar() {
  $menubar.animate({
    top: '-30%'
  });
}
function onHashChange() {
  var hash = window.location.hash;
  if(hash == "#/"){
    closeMenuBar();
    closeContainer();
    setTimeout(function(){ $cont.children().hide(); }, 300);
    setTimeout(function(){
      $G.show();
      $G.addClass(magicIn);
      setTimeout(function(){
        $G.removeClass(magicIn);
      }, 500);
    }, 400);
    document.title = "Timo Gafner";
  } else if (hash.substr(hash.length - 2) == "/m") {
    var activeHref = $('.main-nav').find('.active').attr('href');
    if(hash != activeHref){
      $G.hide();
      $G.addClass('nm');
      closeContainer();
      setTimeout(function(){ $cont.children().hide(); }, 300);
      var div = "."+hash.replace('#/', '').replace('/m', '');
      setTimeout(function(){ window.location.hash = '#/'+div.replace('.',''); }, 500);
    }
  } else {
    var title = hash.replace('#/','')
    title = "TG | "+title[0].toUpperCase()+title.slice(1, title.length);
    document.title = title;

    var div = "."+hash.replace('#/', '');
    reset(div);
    if($G.hasClass('nm')){
      /*no magic*/
      $(div).show();
      openContainer();
      openMenuBar();
      $G.removeClass('nm');
    } else {
      /*do magic*/
      $G.addClass(magicOut);
      setTimeout(function(){
        $(div).show();
        openContainer();
        openMenuBar();
      }, 400);
      setTimeout(function(){
        $G.removeClass(magicOut);
        $G.removeClass('nm');
      }, 900);
    }
  }
  /*change avtive li*/
  $mnl.removeClass('active');
  var nact = "#nav-"+hash.replace('.', '').replace('#/','');
  if(nact.substr(nact.length -2) == "/m"){
    nact = nact.replace('/m', '');
  }
  $(nact).addClass('active');
}
