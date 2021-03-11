(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-burger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if (this.classList.contains("is-active") === true){
        this.classList.remove("is-active");
      } else{
        this.classList.add("is-active");
        window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
      }
    });
  }
  

})();