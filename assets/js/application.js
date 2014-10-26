//= require ../vendor/jquery.scrollTo/jquery.scrollTo
//= require ../vendor/magnific-popup/dist/jquery.magnific-popup.min

$(document).ready(function() {

  // Fade in header elements.

  fadeElements('.js-logo', 300, 1500);
  fadeElements('.js-demo-bg', 2000, 2000);
  fadeElements('.js-scroll-down', 1000, 1500);

  // Scroll to video

  $(document).on('click', '.js-scroll-down', function(e) {
    e.preventDefault();
    $('body').scrollTo('.js-video', 1000);
  });

  // Initialize timeline modal.

  $('.js-timeline-photo').magnificPopup({
    type: 'image'
  });

});

/**
 * Fade in elements.
 *
 * @param target
 * @param timeout
 * @param duration
 */

function fadeElements(target, timeout, duration) {
  setTimeout(function() {
    $(target).fadeIn(duration);
  }, timeout);
}
