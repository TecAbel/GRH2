$(function(){

    //menu responsivo
    var alturaBarra = $('.barra').innerHeight();
    $('body').css({'margin-top': (alturaBarra + 15) + 'px'});

    $('.hamburguesa').click(function () {
        $('.navegacion-principal').slideToggle();
        
    });
});