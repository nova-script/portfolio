function smoothScrollToTop(){
	$('html, body').animate({scrollTop:0}, 'slow');
}

function smooth_scroll_to (elem) {
    var offset = 0;

    offset = $(elem).offset().top;

    $('html, body').animate({
        scrollTop: offset
    }, 550);
}