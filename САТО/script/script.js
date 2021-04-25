(function() {

  "use strict";
/* -----------------Navigation------------------- */
  var toggles = document.querySelectorAll(".toggle-burger");
  var tabs =  document.querySelectorAll(".tabs__item");
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

  /* -----------------Courses------------------- */

  function crateHeadRow(row){
    let list = `<tr>
			<th>${checkUndefined(row["A"])}</th>
			<th>${checkUndefined(row["B"])}</th>
			<th>${checkUndefined(row["C"])}</th>
			<th>${checkUndefined(row["D"])}</th>
			<th>${checkUndefined(row["E"])}</th>
			<th>${checkUndefined(row["F"])}</th>
			<th>${checkUndefined(row["G"])}</th>
      <th>${checkUndefined(row["H"])}</th>
			</tr>`
    return list;
  }

  function crateRow(row){
    let list = `<tr>
			<td>${checkUndefined(row["A"])}</td>
			<td>${checkUndefined(row["B"])}</td>
			<td>${checkUndefined(row["C"])}</td>
			<td>${checkUndefined(row["D"])}</td>
			<td>${checkUndefined(row["E"])}</td>
			<td>${checkUndefined(row["F"])}</td>
			<td>${checkUndefined(row["G"])}</td>
      <td>${checkUndefined(row["H"])}</td>
			</tr>`
    return list;
  }
  /* Func for transform undefind returns from API*/
  function checkUndefined(data){
    if(data == undefined){
      return "";
    }
    else{
      return data
    }

  }
/* Func for get data from API*/
  function getCourses(){
    return fetch("http://localhost:3000/api/courses")
    .then((response=>{
      return response.json(response);
    }));
  }
/* Func for create table of courses*/
  getCourses().then(courses=>{
    let list = "";
    
    courses.forEach(course => {
      if (course["_id"] =='60843597c6e54a0c4861dea1') {
        list += crateHeadRow(course);
      }
    });
    courses.forEach(course => {
      if (course["_id"] !='60843597c6e54a0c4861dea1') {
        list += crateRow(course);
      }
    });
    $("#tab_1").html(list);
  })
  const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
  const tabsItems = document.querySelectorAll(".tabs__item");

  tabsBtn.forEach(onTabClick);
/* Func for realize changing tabs*/
  function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        console.log(item);
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