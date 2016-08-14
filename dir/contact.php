<div class="contact-container">
  <div class="particles-wrapper">
    <div class="contact-bg" id="particles-js"></div>
    <!--
    stats - count particles
    <div class="count-particles">
      <span class="js-count-particles">--</span> particles
    </div>
    <script>
    setTimeout(function () {
      var count_particles, stats, update;
      stats = new Stats;
      stats.setMode(0);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector('.js-count-particles');
      update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
          count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }, 1000);
    </script>
    -->
  </div>
  <div
    class="contact-wrapper"
    style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;"
    unselectable="on"
    onselectstart="return false;"
  >
    <div class="cont-content">
      <div class="cont-header">
        <p>SAY <span>HI</span></p>
      </div>
      <div class="cont-body">
        <div class="particulars">
          <input type="text" name="name" id="name" placeholder="Your Name">
          <input type="text" name="mail" id="mail" placeholder="Your Email">
        </div>
        <div class="message">
          <textarea name="text" rows="10" id="message" placeholder="Type anything here"></textarea>
        </div>
        <div class="send">
          <button type="button" name="send" id="sendBtn"><p>send</p></button>
        </div>
        <a href=""name="send" id="send"><p>send</p></a>
      </div>
    </div>
  </div>
</div>
