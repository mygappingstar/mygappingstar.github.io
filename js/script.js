(function($) {
  'use strict';

    var navToggle = $('.nav-toggle__icon');
    var nav = $('.nav');
    var contentOverlay = $('.content-overlay');

    navToggle.on('click', function(){
      nav.addClass('nav--mobile');
      contentOverlay.addClass('content-overlay--active');
    });

    contentOverlay.on('click', function(){
      nav.removeClass('nav--mobile');
      contentOverlay.removeClass('content-overlay--active');
    });
  
})(jQuery);
