$(document).ready(function() {

	$('.fly-out').click(function() {
		// $('.link-box').animate({
		// 	display: "block"
		// }, 500);
    $('.link-box').toggle(500);
	});

  $('.link-box').click(function() {
    $('.fly-out').animate({
      right: "-225"
    }, 500);
  });

});