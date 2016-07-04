$(document).ready(function() {

    var hash = window.location.hash.substr(1);
    var href = $('#nav li a').each(function() {
        var href = $(this).attr('href');
        if (hash == href.substr(0, href.length - 5)) {
            var toLoad = hash + '.html #content-load';
            $('#content-load').load(toLoad)
        }
    });

    $('#nav li a').click(function() {

        var toLoad = $(this).attr('href') + ' #content-load';
        $('#content-load').hide('fast', loadContent);
        $('#load').remove();
        $('.inner-holder').append('<span id="load">LOADING...</span>');
        $('#load').fadeIn('normal');
        window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);

        function loadContent() {
            $('#content-load').load(toLoad, '', showNewContent())
        }

        function showNewContent() {
            $('#content-load').show('normal', hideLoader());
        }

        function hideLoader() {
            $('#load').fadeOut('normal');
        }
        return false;

    });




    $('a.menux').click(function() {
        $('a.menux').removeClass("active");
        $('.change-bg').removeClass('menu');
        $(this).addClass("active");
        $('.change-bg').addClass($(this).text().toLowerCase().replace(/ /g, ''));

    });

});