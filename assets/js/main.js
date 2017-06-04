/*
	Urban by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)'
  });

  var index = 0;
  var sourceArray = ['images/pic01.jpg', 'images/P22a.jpg', 'images/DSC02207b.JPG'];
	var max = sourceArray.length - 1;
  var autoNext;

  $(function() {

    var $window = $(window),
      $body = $('body'),
      $banner = $('#banner');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      $body.removeClass('is-loading');
      // appendGitHubImage();
      // setUpdate();
    });
//
//     function appendGitHubImage() {
//       console.log('appending!');
//       $(".active_gh_image").css("src", sourceArray[index]);
// 			// $('.github_link').append('<img src="'+sourceArray[index]+'" class="active_gh_image"/>');
// 			$('.active_gh_image').fadeIn("slow");
//     }
//
//     function setUpdate() {
// 			console.log('setting interval!');
//       autoNext = setInterval(moveNext, 3000);
//     }
//
//     function resetUpdate() {
//       clearInterval(autoNext);
//     }
// // set img src; fade in img; fade out img; set img src
//     function moveNext() {
//       console.log('moving!');
//       if (index < max) {
// 				$(".active_gh_image").fadeOut("slow");
//         index++;
//         appendGitHubImage();
// 				resetUpdate();
// 				updateGitHubImage();
//       } else {
// 				$(".active_gh_image").fadeOut("slow");
//         index = 0;
//         appendGitHubImage();
// 				resetUpdate();
// 				updateGitHubImage();
//       }
//     }
//
//
//
//
//










    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', function() {
      $.prioritize(
        '.important\\28 medium\\29',
        skel.breakpoint('medium').active
      );
    });

    // Banner IE fix.
    if ($banner.length > 0) {
      if (skel.vars.IEVersion < 12) {
        $window.on('resize', function() {
          var wh = $window.height() * 0.60,
            bh = $banner.height();
          $banner.css('height', 'auto');
          window.setTimeout(function() {
            if (bh < wh)
              $banner.css('height', wh + 'px');
          }, 0);
        });
        $window.on('load', function() {
          $window.triggerHandler('resize');
        });
      }
    } //end Banner-fix


  });

})(jQuery);
