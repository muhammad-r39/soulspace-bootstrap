$(function() {
    $('.question a').on('click', function(){
        $('.question').removeClass('open');
        $(this).parent().toggleClass('open');
    });

    $('.step').on('click', function(){
        $('.step').removeClass('focused');
        $(this).addClass('focused');
    });

});