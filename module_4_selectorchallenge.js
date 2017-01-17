$(document).ready(function(){
	$("#example").css({"background-color": "blue", "border": "5px solid red"});
});
$('h3').click(function(){
	console.log("hi");
	$('h3').fadeOut('slow', 'linear');
});

$(document).ready(function(){	
	$("#example-two li:odd").css("background-color", "#EEE");
	$("#example-two li:even").css("background-color", "#CCC");	

});
