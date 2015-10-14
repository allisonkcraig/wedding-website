$(window).scroll(function(){

  var windowScroll = $(this).scrollTop();
  	console.log("WINDOW SCROLL: ",windowScroll);

  	// var h = $('#box2-content').offset().top;
  	// console.log(h)

 	// Nameplace - Header
    $('#logo').css({
      'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
    });
    // Overlay - Header
    $('#geo-lace').css({
      'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
    });


	// Content - Div 1
	if (windowScroll < 80) {
		$('#box1-content').css({ 'opacity' : ( windowScroll /200) });
	} else if (windowScroll > 650) {
		$('#box1-content').css({ 'opacity' : 1 - ((windowScroll - 550) / 200)});
	} else {
		$('#box1-content').css({ 'opacity' : 1});
	}

	// Content - Div 2
	if (windowScroll > 1050) {
		 $('#box2-content').css({ 'opacity' : 1 - ((windowScroll - 950) / 200)});
	} else if (windowScroll < 750) {
		$('#box2-content').css({ 'opacity' : ((windowScroll - 450) / 200)});
	} else {
		$('#box2-content').css({ 'opacity' : 1});
	}

	// Content - Div 3
	if (windowScroll > 1500) {
		 $('#box3-content').css({ 'opacity' : 1 - ((windowScroll - 1500) / 200)});
	} else if (windowScroll < 1400) {
		$('#box3-content').css({ 'opacity' : ((windowScroll - 1200) / 200)});
	} else {
		$('#box3-content').css({ 'opacity' : 1});
	}

	// Content - Div 3.5
	if (windowScroll > 2000) {
		 $('#box3-5-content').css({ 'opacity' : 1 - ((windowScroll - 2000) / 200)});
	} else if (windowScroll < 1900) {
		$('#box3-5-content').css({ 'opacity' : ((windowScroll - 1700) / 200)});
	} else {
		$('#box3-5-content').css({ 'opacity' : 1});
	}


	//1050
});