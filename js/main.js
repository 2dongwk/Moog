$(document).ready(function(){
    var a = 0,
        b = 0,
        c = 0;

    //---------------   헤더   ---------------
    $('h1, .con1_main>img').css({'opacity':'0'})
    $('h1').animate({'top':'0', 'opacity':'1'},1200)
    $('header li').css({'margin-top':'-30px', 'opacity':'0'})
    .eq(0).delay(500).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(0).delay(600).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(1).delay(700).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(2).delay(800).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(3).delay(900).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(4).delay(1000).animate({'margin-top':'0', 'opacity':'1'},500)
    $('.con1_main>img').delay(1200).animate({'opacity':'1'},1600)

    a=$(window).width()
    b=$('h1').height()
    $('.h_logo').css({'height':b})
    c=(a/b)/100
    a=1920-a
    b=b-(78-((a*c)/2))
    
    $('.h_logo').css({'top':-b})

    $(window).resize(function(){
        a=$(this).width()
        b=$('h1').height()
        $('.h_logo').css({'height':b})
        c=(a/b)/100
        a=1920-a
        b=b-(78-((a*c)/2))
        
        $('.h_logo').css({'top':-b})
    })

    //---------------   메인 콘텐츠   ---------------
    $('.con1_main a').mouseover(function(){
        $(this).css({'background-color':'#333333', 'color':'#ffffff'})
        .find('svg').stop().animate({'margin-left':'10px'},50)
        .find('path').css({'fill':'#ffffff'})
    }).mouseout(function(){
        $(this).css({'background-color':'#ffffff', 'color':'#000000'})
        .find('svg').stop().animate({'margin-left':'4px'},50)
        .find('path').css({'fill':'#000000'})
    })

    $('.con1_sub_left a').mouseover(function(){
        $(this).css({'text-decoration':'underline'})
        .find('svg').stop().animate({'margin-left':'6px'},200)
    }).mouseout(function(){
        $(this).css({'text-decoration':'none'})
        .find('svg').stop().animate({'margin-left':'0px'},200)
    })

    $('.con2_text a').mouseover(function(){
        $(this).css({'text-decoration':'underline'})
        .find('svg').stop().animate({'margin-left':'10px'},200)
    }).mouseout(function(){
        $(this).css({'text-decoration':'none'})
        .find('svg').stop().animate({'margin-left':'4px'},200)
    })

    $('.con3_sub a').mouseover(function(){
        $(this).find('img, p').stop().animate({'opacity':'0.7'},200)
        $(this).find('.arrow').stop().animate({'rotate':'-45deg'},200)
    }).mouseout(function(){
        $(this).find('img, p').stop().animate({'opacity':'1'},200)
        $(this).find('.arrow').stop().animate({'rotate':'0deg'},200)
    })
})