$('#nav-bar-btn').click(
	function(){$("nav").toggle("slow");}
);

$(document).ready(function($) {   

    $("#slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut',
        dots: false,
        nav: true,
        navText:["&lt;","&gt;"] 
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('#right').click(function() {
        owl.trigger('next.owl.carousel', [700]);
    })

    $('#left').click(function() {
        owl.trigger('prev.owl.carousel', [700]);
    })

    $('#masonry-mix').masonry({
      itemSelector: '.item',
          singleMode: false,
      isResizable: true,
      isAnimated: true,
          animationOptions: { 
          queue: true, 
          duration: 500 
      }
    }); 
});

jQuery(document).ready(function() {
  jQuery(".gallery").fancybox();
});


