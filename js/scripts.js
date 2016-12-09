$(document).ready(function () {
  $('.button-collapse').sideNav();
  $('.slider').slider({
    full_width: true,
    indicators: false
  });

  // Smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function () {
    // Check if the link target belongs this to page
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname) {
        // hash property returns the anchor part of the url
        // The following line removes the pound sign from the target and finds
        // the target element
        // For more, read http://lea.verou.me/2011/05/get-your-hash-the-bulletproof-way/
        target = $('[id=' + this.hash.slice(1) + ']');

        if (target.length)
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
    }
  })
});
