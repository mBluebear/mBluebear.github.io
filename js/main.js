$(document).ready(function(){
    $('#slideshow-container').slick({
        dots: true
    });

    var wall = new freewall("#portfolio_grid");
    wall.reset({
        selector: '.item',
        animate: true,
        cellW: 200,
        cellH: 'auto',
        onResize: function() {
            wall.fitWidth();
        }
    });

    var images = wall.container.find('.item');
    images.find('img').load(function() {
        wall.fitWidth();
    });

    $('#portfolio_grid .item').click(function(){
        $('#mask').fadeIn();
        $('#port_' + $(this).attr('data-id')).fadeIn();
        $('#port_' + $(this).attr('data-id')).css({top: $(this).offset().top + 'px'});


        $('#port_' + $(this).attr('data-id') + ' .portfolio_slide').slick({
            dots: true,
            //lazyLoad: 'ondemand'
        });
    });

    $('.portfolio_close, #mask').click(function(){
        $('#mask').fadeOut();
        $('.portfolio_overlay').fadeOut();

        return false;
    });

    $('#phone-nav').click(function(){
        $('#mobile-nav').slideToggle();
        return false;
    });

    $('.nav a, #mobile-nav a, .logo').click(function(){
        var xxx = $(this);
        $('html, body').animate({
            scrollTop: $(xxx.attr('href')).offset().top - 50
        }, 500);

        $('.nav li').removeClass('active');
        xxx.parent().addClass('active');
        $('#mobile-nav').slideUp();

        return false;
    });
});