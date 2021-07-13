(function() {

  "use strict";

/*---------------Variables-------------- */

  var toggles = document.querySelectorAll(".toggle-burger");
  const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
  const tabsItems = document.querySelectorAll(".tabs__item");

/*---------------Functions-------------- */
/* -----------------Navigation---------- */
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
      }
    });
  }
/*---------------Tabs-------------- */
  
  tabsBtn.forEach(onTabClick);
    
  /* Func for realize changing tabs*/
  function onTabClick(item) {
    item.addEventListener("click", function() {
      let currentBtn = item;

      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
  
      if( !currentBtn.classList.contains('active') ) {
  
        tabsBtn.forEach(function(item) {
          item.classList.remove('active');
        });
  
        tabsItems.forEach(function(item) {
          item.classList.remove('active');
        });
  
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  }
})();