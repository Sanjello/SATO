$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
		speed:1200,
		centerMode:true,
		responsive:[
		{
			breakpoint:1790,
			settings:{
				slidesToShow:1
			}
		}],
		easing:"linear"
	});

}); 