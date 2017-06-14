var toggle = 0

$('#content p').click(function(){
	if(toggle == 0){
		$(this).css('color', 'rgb(203, 255, 203)')
	} else {
		$(this).css('color', 'white')
		toggle = 0
	}
	
})