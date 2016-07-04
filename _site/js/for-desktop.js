jQuery(document).ready(function($) {

    $('.cd-popup-trigger').on('click', function(event) {
        event.preventDefault();
        $('.cd-popup').addClass('is-visible');
        $('.remove-desktop-pop').hide();
    });


    $('.cd-popup').on('click', function(event) {
        if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
            $('.remove-desktop-pop').show();
        }
    });

    $(document).keyup(function(event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
            $('.remove-desktop-pop').show();
        }
    });
});