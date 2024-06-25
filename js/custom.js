$(function() {
    $('.question a').on('click', function(){
        $('.question').removeClass('open');
        $(this).parent().toggleClass('open');
    });

    $('.step').on('click', function(){
        $('.step').removeClass('focused');
        $(this).addClass('focused');
    });

    $('.therapy-slider').slick({
        infinite: true,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '.slider-arrow.next',
        prevArrow: '.slider-arrow.prev',
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });
});