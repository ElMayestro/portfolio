<html>
<header>
  <link rel="stylesheet" type="text/css" href="/res/css/guimain.css">
  <link rel="stylesheet" type="text/css" href="/res/css/reset.css">
  <link rel="stylesheet" type="text/css" href="/res/css/cfonts.css">
  <link rel="stylesheet" type="text/css" href="/res/css/guibar.css">
  <!-- jquery -->
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
  <script src="/res/js/g.js"></script>
</header>
<script>
  /*define functions*/
  function hcFunction() {
    onHashChange();
  }
  function glow() {
    glowG();
  }
</script>
<body onhashchange="hcFunction()">
  <div class="menubar">
    <div class="navigation">
      <a href="#" id="logo"></a>
      <ul class="main-nav">
        <li data-href="timo" class="main-nav-item"><a class="main-nav-link" id="nav-timo" href="#timo">TIMO</a></li>
        <li data-href="cv" class="main-nav-item"><a class="main-nav-link active" id="nav-cv" href="#cv">CV</a></li>
        <li data-href="projects" class="main-nav-item"><a class="main-nav-link" id="nav-projects" href="#projects">PROJECTS</a></li>
        <li data-href="skills" class="main-nav-item"><a class="main-nav-link" id="nav-skills" href="#skills">SKILLS</a></li>
        <li data-href="contact" class="main-nav-item"><a class="main-nav-link" id="nav-contact" href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
  <div class="wrapper">
      <div class="G">
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
        <div id="HAY" class="f19 writting flyin rightUpRot pacifico"><p class="writing">Hi</p></div>
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
    <div class="cv">
      <p>cv</p>
    </div>
    <div class="projects">
      <p>projects</p>
    </div>
    <div class="skills">
      <p>skills</p>
    </div>
    <div class="contact">
      <p>contact</p>
    </div>
    <div class="timo">
      <p>timo</p>
    </div>
  </div>
</body>
</html>
