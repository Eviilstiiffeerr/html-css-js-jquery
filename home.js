$(document).ready(function(){
	$(".one").hover(function(){
		$(this).animate({
			 
            opacity: '0.5',
            height: '65%',
            width: '135%',

		})
	},function(){
		$(this).animate({
			 
            opacity: '1.0',
            height: '65%',
            width: '135%'
		})
	});
});


$(document).ready(function(){
	$("#button").click(function(){
		$("html, body").animate({ scrollTop: 0},"slow");
		
	});
});