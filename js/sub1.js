$(document).ready(function(){
    var a = 0,
        b = 0,
        c = 0,
        d = 0;

    $('.slider_img li:gt(0)').css({'opacity':'0.4'})
    $('.slider_text li').css({'top':'6%', 'opacity':'0'})
        
    //---------------   헤더   ---------------
    $('h1, .con1_main>img').css({'opacity':'0'})
    $('h1').delay(1100).animate({'top':'0', 'opacity':'1'},700)
    $('header li').css({'margin-top':'-30px', 'opacity':'0'})
    .eq(0).delay(500).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(0).delay(600).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(1).delay(700).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(2).delay(800).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(3).delay(900).animate({'margin-top':'0', 'opacity':'1'},500)
    .siblings('li').eq(4).delay(1000).animate({'margin-top':'0', 'opacity':'1'},500)

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

    //---------------   sub1 콘텐츠   ---------------
    d=$('.slider_img li').height()
    d=d*0.9
    $('.slider').css({'height':d})

    $(window).resize(function(){
        d=$('.slider_img li').height()
        d=d*0.9
        $('.slider').css({'height':d})
    })

    $('.slider_text li').eq(0).animate({'top':'0', 'opacity':'1'},1600)

    setInterval(function(){
        $('.slider_img').animate({'left':'-100%'},1600,function(){
            $('.slider_img li:first').appendTo('.slider_img')
            $('.slider_img').css({'left':'0'})
        })
        $('.slider_img li:first').stop().animate({'opacity':'0.4'},2000)
        .siblings('li:first').stop().animate({'opacity':'1'},2000)

        $('.slider_text li:first').stop().fadeOut(200).appendTo('.slider_text')
        .siblings('li:first').stop().animate({'top':'0', 'opacity':'1'},1600,function(){
            $('.slider_text li:gt(0)').css({'display':'block', 'top':'6%', 'opacity':'0'})
        })
    },5000)
})