$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,

		infinite:true,
		speed:1200,
		initialSlide:1,
		centerMode:true,
		autoplay:false,
		autoplaySpeed:5000,
		pauseOnHover:true,
		draggable:false,
		waitForAnimate:false,
		responsive:[
		{
			breakpoint:1790,
			settings:{
				slidesToScroll: 1,
				slidesToShow:1
			}

		},
		{
			breakpoint:470,
			settings:{
				variableWidth: true
			}

		}
		]
	});

}); 