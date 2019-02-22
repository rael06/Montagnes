"use strict";

(function() {
    $(document).ready(function() {
        $('#dismiss, .overlay').on('click', function() {
            // cacher le menu (sidebar)
            $('#sidebar').removeClass('active');
            // cacher l'ombre (utilisation special overlay)
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function() {
            // ouvrir
            $('#sidebar').addClass('active');
            $('.overlay').addClass('active');
        });
    });

    jQuery(function($){
        var pictures = $('.pictures');
        pictures.masonry({
            itemSelector: '.pic',
            columnWidth: 1
        });
    });
})()