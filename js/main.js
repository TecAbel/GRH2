$(function(){
    var alturaBarra = $('.barra').innerHeight();
    $('body').css({'margin-top': (alturaBarra + 5) + 'px'});

    $('.hamburguesa').click(function () {
        $('.navegacion-principal').slideToggle();
        
    });
});