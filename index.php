<html>
<head>
  <!--aftload-->
  <link rel="stylesheet" type="text/css" href="/res/css/timo.css">
  <link rel="stylesheet" type="text/css" href="/res/css/cv.css">
  <link rel="stylesheet" type="text/css" href="/res/css/projects.css">
  <link rel="stylesheet" type="text/css" href="/res/css/skills.css">
  <link rel="stylesheet" type="text/css" href="/res/css/contact.css">

  <!--def-->
  <link rel="stylesheet" type="text/css" href="/res/css/style.css">
  <link rel="stylesheet" type="text/css" href="/res/css/reset.css">
  <link rel="stylesheet" type="text/css" href="/res/css/cfonts.css">
  <link rel="stylesheet" type="text/css" href="/res/css/writting.css">
  <link rel="stylesheet" type="text/css" href="/res/css/menubar.css">
  <!-- fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Oswald">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Source+Code+Pro">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=News+Cycle">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Indie+Flower">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lobster">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Pacifico">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Maven+Pro">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arimo">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Helvetica+Neue">

  <!--magic-->
  <link rel="stylesheet" type="text/css" href="/res/css/magic.css">
  <link rel="stylesheet" type="text/css" href="/res/css/animate.css">
  <link rel="stylesheet" type="text/css" href="/res/css/hover.css">
  <!-- jquery -->
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
  <script src="/res/js/flip.js"></script>
  <script src="/res/js/g.js"></script>
  <script src="/res/js/reset.js"></script>
  <!-- aftload -->
  <script src="/res/js/timo.js"></script>
  <script src="/res/js/cv.js"></script>
  <script src="/res/js/contact.js"></script>
  <script src="/res/js/particles.js"></script>
  <script src="/res/js/mousewheel.js"></script>
  <script src="/res/js/lib/stats.js"></script>
  <script src="/res/js/projects.js"></script>


</head>
<script>
  /*define functions*/
  function hcFunction() {
    onHashChange();
    preloadTurntable();
  }
  preloadTurntable();
  function glow() {
    glowG();
  }
</script>
<body onhashchange="hcFunction()">
  <div class="swapbar"></div>
  <div class="menubar">
    <div class="navigation">
      <a href="#/" id="logo"></a>
      <ul class="main-nav">
        <li data-href="#/timo/m" class="main-nav-item"><a class="main-nav-link" id="nav-timo" href="#/timo/m">ABOUT</a></li>
        <li data-href="#/cv/m" class="main-nav-item"><a class="main-nav-link active" id="nav-cv" href="#/cv/m">CV</a></li>
        <li data-href="#/projects/m" class="main-nav-item"><a class="main-nav-link" id="nav-projects" href="#/projects/m">PROJECTS</a></li>
        <li data-href="#/skills/m" class="main-nav-item"><a class="main-nav-link" id="nav-skills" href="#/skills/m">SKILLS</a></li>
        <li data-href="#/contact/m" class="main-nav-item"><a class="main-nav-link" id="nav-contact" href="#/contact/m">CONTACT</a></li>
      </ul>
    </div>
  </div>
  <div class="wrapper">
      <div class="G nm">
        <!-- TOPICS -->
        <div id="CV" class="ft1 flyin rightDownRot"><a class="topic blue" href="#/cv">CV</a></div>
        <div id="PROJECTS" class="ft2 flyin rightUpRot"><a class="topic blue" href="#/projects">PROJECTS</a></div>
        <div id="SKILLS" class="ft3 flyin rightDownRot"><a class="topic blue" href="#/skills">SKILLS</a></div>
        <div id="CONTACT" class="ft4 flyin rightUpRot"><a class="topic blue" href="#/contact">CONTACT</a></div>
        <div id="TIMO"><a class="ft5 flyin topic blue" href="#/timo">TIMO</a></div>
        <!-- writings -->
        <div id="FOCUS" class="f1 writting flyin rightDownRot maven"><p class="writing">FOCUS</p></div>
        <div id="COFFEE" class="f4 writting flyin rightDownRot oswald"><p class="writing">COFFEE</p></div>
        <div id="MOUETTE" class="f5 writting flyin rightDownRot pacifico"><p class="writing">Mouette</p></div>
        <div id="TECH" class="f3 writting flyin rightDownRot scp"><p class="writing">TECHNOLOGY</p></div>
        <div id="CONC" class="f1 writting flyin rightUpRot scp"><p class="writing">CONCENTRATION</p></div>
        <div id="GRIZZI" class="f6 writting flyin rightUpRot indieflower"><p class="writing">GRIEZMANN</p></div>
        <div id="ZEST" class="f7 writting flyin rightUpRot maven"><p class="writing">ZEST</p></div>
        <div id="PHP" class="f8 writting flyin downRot maven"><p class="writing">PHP</p></div>
        <div id="MUSIC" class="f9 writting flyin newscycle"><p class="writing">MUSIC</p></div>
        <div id="DESIGN" class="f10 writting flyin pacifico"><p class="writing">Design</p></div>
        <div id="CSS" class="f11 writting flyin oswald"><p class="writing">CSS</p></div>
        <div id="JS" class="f12 writting flyin downRot scp"><p class="writing">JS</p></div>
        <div id="COLORFUL" class="f13 writting flyin rightUpRot scp"><p class="writing">COLORFUL</p></div>
        <div id="HI" class="f14 writting flyin pacifico"><p class="writing">Hi</p></div>
        <div id="STYLE" class="f15 writting flyin pacifico"><p class="writing">Style</p></div>
        <div id="NETWORK" class="f9 writting flyin rightUpRot newscycle"><p class="writing">NETWORK</p></div>
        <div id="FCB" class="f16 writting flyin rightDownRot indieflower"><p class="writing">FCB</p></div>
        <div id="BARCA" class="f17 writting flyin rightUpRot tangerine"><p class="writing">Barcelona</p></div>
        <div id="SCORE" class="f13 writting flyin rightUpRot scp"><p class="writing">SCORE</p></div>
        <div id="RESULT" class="f16 writting flyin rightUpRot lobster"><p class="writing">RESULT</p></div>
        <div id="LOVE" class="f14 writting flyin rightDownRot maven"><p class="writing">LOVE</p></div>
        <div id="PYTHON" class="f3 writting flyin rightUpRot scp"><p class="writing">PYTHON</p></div>
        <div id="FRESH" class="f11 writting flyin rightUpRot scp"><p class="writing">FRESH</p></div>
        <div id="GAFNER" class="f18 writting flyin rightDownRot pacifico"><p class="writing">Gafner</p></div>
        <div id="HAY" class="f19 writting flyin rightUpRot tangerine"><p class="writing">Hi</p></div>
        <div id="ELWAY" class="f20 writting flyin rightDownRot oswald"><p class="writing">ELWAY</p></div>
        <div id="JAZZ" class="f15 writting flyin rightDownRot maven"><p class="writing">JAZZ</p></div>
        <div id="DRUMS" class="f12 writting flyin rightDownRot maven"><p class="writing">DRUMS</p></div>
        <div id="SURF" class="f6  writting flyin rightUpRot maven"><p class="writing">SURF</p></div>
        <div id="BRAND" class="f18 writting flyin rightUpRot oswald"><p class="writing">BRAND</p></div>
        <div id="ELLINGTON" class="f21 writting flyin rightUpRot oswald"><p class="writing">ELLINGTON</p></div>
        <div id="LEBRON" class="f2 writting flyin rightDownRot oswald"><p class="writing">LEBRON</p></div>
        <div id="LOGICAL" class="f10 writting flyin rightDownRot scp"><p class="writing">LOGICAL</p></div>
        <div id="EXPLORE" class="f22 writting flyin rightUpRot maven"><p class="writing">EXPLORE</p></div>
        <div id="PERCUSSION" class="f20 writting flyin rightUpRot indieflower"><p class="writing">PERCUSSION</p></div>
        <div id="COMPUTER" class="f7 writting flyin rightUpRot oswald"><p class="writing">COMPUTER</p></div>
        <div id="EXPERIENCE" class="f13 writting flyin rightUpRot maven"><p class="writing">EXPERIENCE</p></div>
        <div id="PASSION" class="f22 writting flyin rightUpRot pacifico"><p class="writing">Passion</p></div>
        <div id="BLAUGRANA" class="f16 writting flyin rightDownRot pacifico"><p class="writing">Blaugrana</p></div>
        <div id="NICE" class="f18 writting flyin rightDownRot maven"><p class="writing">NICE</p></div>
        <div id="DEDICATION" class="f23 writting flyin rightUpRot oswald"><p class="writing">DEDICATION</p></div>
        <div id="CURIOSITY" class="f12 writting flyin rightUpRot indieflower"><p class="writing">CURIOSITY</p></div>
        <div id="P100" class="f20 writting flyin rightUpRot oswald"><p class="writing">>100%</p></div>
        <div id="FRENCH" class="f14 writting flyin rightDownRot tangerine"><p class="writing">Français</p></div>
        <div id="LONDON" class="f22 writting flyin rightUpRot oswald"><p class="writing">LONDON</p></div>
        <div id="PROGRESS" class="f6 writting flyin rightUpRot indieflower"><p class="writing">PROGRESS</p></div>
        <div id="ENDURANCE" class="f19 writting flyin rightDownRot scp"><p class="writing">ENDURANCE</p></div>
        <div id="FRIENDS" class="f23 writting flyin rightUpRot tangerine"><p class="writing">Friends</p></div>
        <div id="TG" class="f17 writting flyin rightDownRot oswald"><p class="writing">TG</p></div>
        <div id="LIGHT" class="f19 writting flyin rightUpRot tangerine"><p class="writing">Light</p></div>
        <div id="OCEAN" class="f15 writting flyin rightDownRot scp"><p class="writing">OCEAN</p></div>
        <div id="EMINEM" class="f8 writting flyin rightDownRot"><p class="writing">EMINƎM</p></div>
        <div id="ATOM" class="f7 writting flyin rightUpRot maven"><p class="writing">ATOM</p></div>
      </div>
  </div>
  <div class="container">
    <div class="content cv" data-status="false"></div>
    <div class="content projects"></div>
    <div class="content skills"></div>
    <div class="content contact"></div>
    <div class="content timo"></div>
  </div>
</body>
</html>
