(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");
  var nav = document.querySelector(".header__menu");
  var scr = screen.width;
  
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if(this.classList.contains("is-active") != true){
      }
      else{
        this.classList.remove("is-active") ;
      }
    });
  }

})();