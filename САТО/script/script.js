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
			<th>${checkUndefinedText(row["A"])}</th>
			<th>${checkUndefinedText(row["B"])}</th>
			<th>${checkUndefinedText(row["C"])}</th>
			<th>${checkUndefinedText(row["D"])}</th>
			<th>${checkUndefinedText(row["E"])}</th>
			<th>${checkUndefinedText(row["F"])}</th>
			<th>${checkUndefinedText(row["G"])}</th>
      <th>${checkUndefinedText(row["H"])}</th>
			</tr>`
    return list;
  }

  function crateRow(row){
    let list = `<tr>
			<td style="background:${checkUndefinedColor(row["A"])};">${checkUndefinedText(row["A"])}</td>
			<td style="background:${checkUndefinedColor(row["B"])};">${checkUndefinedText(row["B"])}</td>
			<td style="background:${checkUndefinedColor(row["C"])};">${checkUndefinedText(row["C"])}</td>
			<td style="background:${checkUndefinedColor(row["D"])};">${checkUndefinedText(row["D"])}</td>
			<td style="background:${checkUndefinedColor(row["E"])};">${checkUndefinedText(row["E"])}</td>
			<td style="background:${checkUndefinedColor(row["F"])};">${checkUndefinedText(row["F"])}</td>
			<td style="background:${checkUndefinedColor(row["G"])};">${checkUndefinedText(row["G"])}</td>
      <td style="background:${checkUndefinedColor(row["H"])};">${checkUndefinedText(row["H"])}</td>
			</tr>`
    return list;
  }
  /* Func for transform undefind returns from API*/
  function checkUndefinedColor(data){
    if(data == undefined){
      return "rgba(78, 78, 83,.1)";
    }
    else{
      return data["color"];
    }
  }
  function checkUndefinedText(data){
    if(data == undefined){
      return "";
    }
    else{
      return data["text"];
    }
  }
/* Functins for get data from API*/
function getMagistr(){
  return fetch("http://localhost:3000/api/courses/magistr")
  .then((response=>{
    return response.json(response);
  }));
}
  function getSystemAnaliz(){
    return fetch("http://localhost:3000/api/courses/systemAnaliz")
    .then((response=>{
      return response.json(response);
    }));
  }
  function getAnalizDanux(){
    return fetch("http://localhost:3000/api/courses/analizDanux")
    .then((response=>{
      return response.json(response);
    }));
  }
/* Func for create table of courses*/
  getMagistr().then(courses=>{
    let list = "";
    
    courses.forEach(course => {
      console.log(course);
      if (course["_id"] =='608aabea2fdb3f1ba8ed5151') {
        list += crateHeadRow(course);
      }
    });
    courses.forEach(course => {
      if (course["_id"] !='608aabea2fdb3f1ba8ed5151') {
        list += crateRow(course);
      }
    });
    $("#tab_3").html(list);
  })
  getSystemAnaliz().then(courses=>{
    let list = "";
    
    courses.forEach(course => {
      console.log(course);
      if (course["_id"] =='6089be24b506e11fd4150664') {
        list += crateHeadRow(course);
      }
    });
    courses.forEach(course => {
      if (course["_id"] !='6089be24b506e11fd4150664') {
        list += crateRow(course);
      }
    });
    $("#tab_2").html(list);
  })
  getAnalizDanux().then(courses=>{
    let list = "";
    
    courses.forEach(course => {
      console.log(course);
      if (course["_id"] =='6089a51a8d1cbb23fc19cefa') {
        list += crateHeadRow(course);
      }
    });
    courses.forEach(course => {
      if (course["_id"] !='6089a51a8d1cbb23fc19cefa') {
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