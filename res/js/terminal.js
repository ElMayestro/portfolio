$(function(){
  cDom();
  /*CACHE DOM ON CHANGE*/
  function cDom() {
    $display = $('.display');
    $terminal = $('.terminal');
    $termInput = $('#termInput');
    $termPath = $('.terminalPath');
    $history = $('.history');
    $link = $('.link');
    $welcMessage = $('.welcome .message');
    $close = $('.closeBtn');
    $open = $('.openTerminal');
  }
  /*WELCOME*/

  /*close btn*/
  $close.click(function(){
    $terminal.animate({
      "margin-left": "-35vw"
    }, 1000);
    $display.animate({
      "width":"100vw"
    }, 1000, function(){
      $open.animate({
        "margin-left":"0px"
      }, 200);
    });
  });
  /*open btn*/
  $open.click(function(){
    $open.animate({
      "margin-left":"-30px"
    }, 200, function(){
      $terminal.animate({
        "margin-left": "0"
      }, 1000);
      $display.animate({
        "width":"65vw"
      }, 1000);
    });
  });
  /*focus*/
  $terminal.click(function(){
    $termInput.focus();
  });
  /*links*/
  $('.link').click(function(){
    link = $(this).data('link');
    type(link);
  });
  function type(link){
    $termInput.typed({
      strings: [link],
      typespeed: 0
    });
  }
  /*on enter*/
  $termInput.keydown(function(e){
    var code = e.keyCode || e.which;
    input = $termInput.val();
    switch (code) {
      case 13:
        //enter pressed
        execute(input);
        updateHistory(input);
        $termInput.data('CI', '');
        break;
      case 38:
        getPrevious();
        break;
      case 40:
        getNext(input);
        break;
      default:
        setActive(input);
    }
  });

  function next(oldCom) {
    statement = "<div class='statement'>"+$termPath.html()+" "+oldCom+"<div class='statement'>";
    $history.append(statement);
    $termInput.val("");
  }
  function updateHistory(current) {
    if(current != ""){
      hist = $termInput.data('history')+"|"+current;
      $termInput.data('history', hist);
    }
  }
  function getPrevious() {
    i = $termInput.data('CI');
    newCurrent = "";
    newCI = "";
    if($termInput.data('CI') == null || $termInput.data('CI') == "") {
      hist = $termInput.data('history').split('|');
      i = hist.length - 1;
      newCurrent = hist[i];
      newCI = i;
    } else {
      hist = $termInput.data('history').split('|');
      i = $termInput.data('CI') - 1;
      newCurrent = hist[i];
      newCI = i;
    }
    if(i > 0){
      $termInput.val(newCurrent);
      $termInput.data('CI', newCI);
    }
    /*Cursor to end????*/
  }
  function getNext(current) {
    i = $termInput.data('CI');
    newCurrent = "";
    newCI = "";
    maxIndex = 0;
    if($termInput.data('CI') == null || $termInput.data('CI') == "") {}else {
      hist = $termInput.data('history').split('|');
      maxIndex = hist.length-1;
      i = $termInput.data('CI') + 1;
      newCurrent = hist[i];
      newCI = i;
    }
    if(i <= maxIndex){
      $termInput.val(newCurrent);
      $termInput.data('CI', newCI);
    } else {
      $termInput.val("");
      $termInput.data('CI', '')
    }
    /*Cursor to end????*/
  }
  function setActive(current) {
    $termInput.data('active', current);
  }
  function execute(command) {
    if (/\s/.test(command)) {
      tmpC = command.split(' ');
      command = tmpC[0];
      opt1 = tmpC[1];
    }
    switch (command) {
      case 'help':
        next(command);
        text = "This is basically a linux terminal and therefore with similar commands<br><br>clear - clear the terminal screen<br>ls - list directory contents<br>cat - print files on standart output SYNOPSIS: cat [FILE]<br>load gui - load a grafical user interface";
        answer = "<div class='statement' style='padding-bottom:4px;'><p>"+text+"</p></div>";
        $history.append(answer);
        break;
      case 'clear':
        $history.html('');
        $termInput.val('');
        break;
      case 'cl':
          $history.html('');
          $termInput.val('');
          break;
      case 'ls':
        next(command);
        text = "<span onclick='alert("+"test"+")' class='link' data-link='cat about.php'>about.php</span><br><span class='link' data-link='cat projects.php'>projects.php</span><br><span class='link' data-link='cat cv.php'>cv.php</span><br><span class='link' data-link='cat skills.php'>skills.php</span>";
        answer = "<div class='statement' style='padding-bottom:4px;'><p>"+text+"</p></div>";
        $history.append(answer);
        cDom();
        $('.link').redraw();
        break;
      case 'cat':
        if(opt1 != ''){
          next(command+" "+opt1);
          display(opt1);
        } else {
          next(command);
          text = "usage: cat [FILE]";
          answer = "<div class='statement' style='padding-bottom:4px;'><p>"+text+"</p></div>";
          $history.append(answer);
        }
        break;
      case 'load':
        next(command+" "+opt1);
        text = "Switching to GUI...";
        answer = "<div class='statement' style='padding-bottom:4px;'><p>"+text+"</p></div>";
        $history.append(answer);
        window.location.href = '/?disp=gui';
        break;


      case '':
        next(command);
        break;
      default:
        next(command);
        answer = "<div class='statement' style='padding-bottom:4px;'><p>bash: "+command+": command not found</p></div>";
        $history.append(answer);
      }
    }

    function display(file){
      var testing;
      $.ajax(file, {
          dataType: 'text',
          success: function (data) {
              content = data;
              $display.html(content);
          },
          error: function () {
            $display.html('');
            text = "bash: "+file+": file not found";
            answer = "<div class='statement' style='padding-bottom:4px;'><p>"+text+"</p></div>";
            $history.append(answer);
          }
      });
    }
    $.fn.redraw = function(){
      $(this).each(function(){
        var redraw = this.offsetHeight;
      });
    };
});
