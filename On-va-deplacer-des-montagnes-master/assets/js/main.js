"use strict";

(function() {
    $(document).ready(function() {
        $('#dismiss, .overlay').on('click', function() {
            // hide menu (sidebar)
            $('#sidebar').removeClass('active');
            // hide shadow (use special overlay)
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function() {
            // open
            $('#sidebar').addClass('active');
            $('.overlay').addClass('active');
        });
    });

    function photos_orderer() {
        var pictures = $('.pictures');
        pictures.masonry({
            itemSelector: '.pic',
            columnWidth: 1,
        });
    };
    photos_orderer();

    // Scroll to Top
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });

    $('#return-to-top').on("click", function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 5000);
    });
})()