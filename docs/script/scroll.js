
window.onload=function(){

	window.addEventListener("scroll",function(){

	    if (pageYOffset>1){
	      document.getElementsByClassName("header")[0].classList.add("scrolled");
	    }
	    else{
	      document.getElementsByClassName("header")[0].classList.remove("scrolled");
	    }
  	})

  	/*---------Some variebles for buttons-------------*/

	const top_button = document.querySelector(".section-top__btn a");
	const buttons = document.querySelectorAll('.header__link');
	const buttons_to_courses = document.querySelectorAll('.about-us__text span a');
	const tabs = document.querySelectorAll('.tabs__nav-btn');
	console.log(buttons_to_courses);
	/*-------------Scroll functions----------------*/

	function calcAndScroll(data){
		const scrollTarget = document.getElementsByClassName(data)[0];    /*Find element scroll to*/
	    const topOffset = document.querySelector('.header').offsetHeight; /*Height of header*/
	    const elementPosition = scrollTarget.getBoundingClientRect().top; /*Height from top to element*/
	    const offsetPosition = elementPosition - topOffset;				  /*Calculate heigt to scroll */
		window.scrollBy({
	        top: offsetPosition,
	        behavior: 'smooth'
	    })			  
	}
	                  /*More button*/
	top_button.addEventListener("click",function(e){
		e.preventDefault();
		href = this.getAttribute("href").substring(1);
	    calcAndScroll(href);
	})
	
				/*Navigation buttons*/
	for (let el of buttons){
		el.addEventListener('click',function(e){
			e.preventDefault();  

			let href = this.getAttribute('href').substring(1);
			var toggle = document.querySelectorAll(".toggle-burger")[0];
			toggle.classList.remove("is-active");
			calcAndScroll(href);
		})
	}
	buttons_to_courses.forEach(button =>{
		button.addEventListener("click",function(e){
			e.preventDefault();
			const id = this.getAttribute('href').substring(1);
			const scrollTarget = document.getElementById(id); /*Find element scroll to*/
			tabs.forEach(tab => {
				let data =tab.getAttribute('data-tab').substring(1);
				console.log(data);
				if (data==id) {
					tab.click();
				}
			});
			const topOffset = document.querySelector('.header').offsetHeight; /*Height of header*/
			const elementPosition = scrollTarget.getBoundingClientRect().top; /*Height from top to element*/
			const offsetPosition = elementPosition - topOffset;				  /*Calculate heigt to scroll */
			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			})	
		})
	})
	
}