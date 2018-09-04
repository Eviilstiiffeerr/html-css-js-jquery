$(document).ready(function(){
	$(".one").hover(function(){
		$(this).animate({
			 
            opacity: '0.5',
            height: '65%',
            width: '103%',

		})
	},function(){
		$(this).animate({
			 
            opacity: '1.0',
            height: '65%',
            width: '103%'
		})
	});
});


$(document).ready(function(){
	$("#button").click(function(){
		$("html, body").animate({ scrollTop: 0},"slow");
		
	});
});


$(document).ready( function() {
$("#set1").hover(
    function() {
        $(this).animate({ 'zoom': 1.2 },0);
        $(this).css("borderStyle","solid");
        $(this).css("borderSize","2px");
        $(this).css("borderColor","skyblue");
       
    },
    function() {
        $(this).animate({ 'zoom': 1 }, 0);
         $(this).css("borderStyle","");
        $(this).css("borderSize","");
        $(this).css("borderColor","");
         
    });
});
$(document).ready( function() {
$("#set2").hover(
    function() {
        $(this).animate({ 'zoom': 1.2 },0);
        $(this).css("borderStyle","solid");
        $(this).css("borderSize","2px");
        $(this).css("borderColor","skyblue");
        $(this).css("line-height","60%");
       
    },
    function() {
        $(this).animate({ 'zoom': 1 }, 0);
         $(this).css("borderStyle","");
        $(this).css("borderSize","");
        $(this).css("borderColor","");
         
    });
});

$(document).ready( function() {
$("#set3").hover(
    function() {
        $(this).animate({ 'zoom': 1.2 },0);
        $(this).css("borderStyle","solid");
        $(this).css("borderSize","2px");
        $(this).css("borderColor","skyblue");
       
    },
    function() {
        $(this).animate({ 'zoom': 1 }, 0);
         $(this).css("borderStyle","");
        $(this).css("borderSize","");
        $(this).css("borderColor","");
         
    });
});