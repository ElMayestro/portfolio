<?php
 $path = '/';
 $user = 'u'.rand(10000, 99999);
 $domain  = $_SERVER['HTTP_HOST'];
?>
<html>
  <header>
    <!--CSS RESET-->
    <link rel="stylesheet" href="/res/css/reset.css"  type="text/css">
    <!-- CSS -->
    <link rel="stylesheet" href="/res/css/main.css" type="text/css">
    <link rel="stylesheet" href="/res/css/terminal.css" type="text/css">
    <link rel="stylesheet" href="/res/css/display.css" type="text/css">
    <link rel="stylesheet" href="/res/css/welcome.css" type="text/css">
    <!-- fonts -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Code+Pro" type="text/css">
    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="/res/js/terminal.js"></script>
    <script src="/res/js/main.js"></script>
    <!-- JS Libs-->
    <script src="/res/js/typed.js"></script>
  </header>
  <body>
    <div class="welcome">
      <div class="message">
      </div>
      <img id="loading" src="/res/img/loading.gif" alt="" />
    </div>
    <div class="openTerminal">
      <div class="openDiv">
        <img class="openBtn" src="/res/img/open.png">
      </div>
    </div>
    <div class="terminal">
      <div class="titlebar">
        <p><?=$user.'@'.$domain.':'.$path?></p>
        <div class="closeTerminal">
          <img class="closeBtn" src="/res/img/close.png">
        </div>
      </div>
      <div class="input">
        <div id="history" class="history">
          <p>Use "<span class="link" data-link="load gui">load gui</span>" to load a graphical user interface.<p>
          <br>
          <p>Use "<span class="link" data-link="help">help</span>" to display help.<p>
          <br>
        </div>
        <div class="activeLine">
          <p class="terminalPath">
            <span style='color:#EF2929'><?=$user.'@'.$domain?></span>:<span style='color:#729FCF'><?=$path?></span>$
          </p>
          <input data-CI='' data-history='' id="termInput" class="termInput" type="text" name="term-input" value="">
        </div>
      </div>
    </div>
  <div class="display">

  </div>
  </body>
</html>
