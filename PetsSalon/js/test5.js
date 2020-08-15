$(function(){
    'use strict';
    console.log('ready');

    //$('section nav.menu a:last').hide();
    //$('#main form').remove();
    //$('#main form').show();

    //var copy = $('main#main form').clone(); //duplicating
    //$('header').append(copy);
    //$('header').prepend(copy);
    $('#menu1').hide();
    $('#menu2').hide();


    $('#logo').on('click',function(){
        console.log("The logo was clicked");
        $('#menu1').show();
        $('#menu2').hide();
    });

    $("h1").on('click',function(){
        $('#menu2').show();
        $('#menu1').hide();
    });




    $("h1").on('mouseenter',function(){
        console.log("Mouse over the title");
    });

    $("h1").on('mouseleave',function(){
        console.log("Mouse leaves");
    });

    $('form').on('click',function(){
        //$(this).remove();
        $(this).addClass('bordered');
    });

    $('section nav.menu a').on('click',function(event){
        event.preventDefault();
        console.log('You have clicked');
        $(this).addClass('bordered');
    });

});