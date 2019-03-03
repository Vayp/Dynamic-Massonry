$(document).ready(function() {
	$('.thumbnail').append('<a class="fancyimage" data-fancybox-group="group"><img class="image img-responsive" alt="alt"  /></a><div class="caption"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>');

	var images = ['img/2.jpg', 'img/3.jpg', 'img/1.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg'];

	for (var currentImage = 0; currentImage < images.length; currentImage++){
		$(".fancyimage").eq(currentImage).attr("href",images[currentImage]);
  	$(".image").eq(currentImage).attr("src",images[currentImage]);
	}
	// console.log(screen.width + " x " + screen.height);
	// console.log(location.reload());
});

$(document).ready(function() {
	var $container = $('.masonry-container');
	$container.imagesLoaded( function () {
	  $container.masonry({
	    columnWidth: '.grid-item',
	    itemSelector: '.grid-item',
			percentPosition: true,
			transitionDuration: '0.8s'
	  });
	});
});

$(document).ready(function() {
  $("a.fancyimage").fancybox({
		padding:5,
		overlayOpacity:0.3
	});
});
