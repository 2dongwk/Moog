$(document).ready(function(){
    var a = 0,
        b = 0,
        c = 0,
        d = 0,
        $s_img = $('.slider_img li'),
        $s_text = $('.slider_text li'),
        e = 0,
        f = 0;
    
    $('.slider_img li:first').css({'opacity':'0.4'})
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

    $('.slider_img li:first').animate({'opacity':'1'},1200)
    $('.slider_text li:first').animate({'top':'0', 'opacity':'1'},1600)

    function auto(){
        $s_img.stop().fadeOut(1800,function(){
            $(this).eq(e).appendTo('.slider_img')
        })
        $s_text.stop().animate({'opacity':'0'},200,function(){
            $s_text.not($s_text.eq(e)).css({'display':'block', 'top':'6%', 'opacity':'0'})
        })

        e=(e+1)%5
        
        $s_img.eq(e).stop().fadeIn(1800)
        $s_text.eq(e).stop().animate({'top':'0', 'opacity':'1'},1800)
    }

    autoslide = setInterval(auto, 6000)

    $('.btn').find('div').click(function(){
        clearInterval(autoslide)
        
        $s_img.stop().fadeOut(600)
        $s_text.stop().animate({'opacity':'0'},200,function(){
            $s_text.not($s_text.eq(e)).css({'display':'block', 'top':'6%', 'opacity':'0'})
        })
        
        f=$(this).index()
        e=(e+4-(3*f))%5

        $s_img.eq(e).stop().fadeIn(600)
        $s_text.eq(e).stop().animate({'top':'0', 'opacity':'1'},800)

        autoslide = setInterval(auto, 6000)
    })

    $('.con1_main li').mouseover(function(){
        $(this).find('img').stop().animate({'opacity':'0.6'},80)
    }).mouseout(function(){
        $(this).find('img').stop().animate({'opacity':'1'},80)
    })
    $('.con1_sub a').mouseover(function(){
        $(this).find('img').stop().animate({'opacity':'0.6'},80)
    }).mouseout(function(){
        $(this).find('img').stop().animate({'opacity':'1'},80)
    })
})