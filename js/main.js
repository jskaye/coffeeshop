// Make it rain!!!

// Hide second two menu sections using jqrey hide
//.addon-grid-wrapper,

//$('.addon-grid-wrapper').hide();
//$('.mug-grid-wrapper').hide();

// When the user clicks #bean
// Hide all
// Fade in the bean section

// When the user clicks #Addon
  // Hide all
  // Fade in the bean section

  // When the user clicks #Mugs
    // Hide all
    // Fade in the bean section
//Nav Bar
// $('#home').on('click', function(event) {
//   event.preventDefault();
//   $('.bean-grid-wrapper').fadeIn('slow');
// });
//
// $('#coffee').on('click', function(event) {
//   event.preventDefault();
//   $('.bean-grid-wrapper').fadeIn('slow');
// });
//
// $('#location').on('click', function(event) {
//   event.preventDefault();
//   $('.bean-grid-wrapper').fadeIn('slow');
// });
//
// $('#galley').on('click', function(event) {
//   event.preventDefault();
//   $('.bean-grid-wrapper').fadeIn('slow');
// });

//lab selections
$('#bean').on('click', function(event) {
  event.preventDefault();
  $('.bean-grid-wrapper').fadeIn('slow');
  $('.addon-grid-wrapper').hide();
  $('.mug-grid-wrapper').hide();
});

$('#addon').on('click', function(event) {
  event.preventDefault();
  $('.addon-grid-wrapper').fadeIn('slow');
  $('.bean-grid-wrapper').hide();
  $('.mug-grid-wrapper').hide();
});

$('#mug').on('click', function(event) {
  event.preventDefault();
  $('.mug-grid-wrapper').fadeIn('slow');
  $('.bean-grid-wrapper').hide();
  $('.addon-grid-wrapper').hide();
});

// Step 1: $(window).scrollTop();
// Step 2: Log distanceScrolled to the console to see what it holds!
$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
	console.log(distanceScrolled);

	if (distanceScrolled >= 542){
		$('nav').addClass('scrolled')
	} else {
		$('nav').removeClass('scrolled')
	}

  if (distanceScrolled >= 2098){
    $('nav').fadeOut('fast')
  }  else if (distanceScrolled <= 2098) {
		$('nav').fadeIn('fast')
	}

});

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
