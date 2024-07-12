$(document).ready(function(){
    var a = 0,
        b = 0,
        c = 0,
        d = 0,
        $h_con1_top = $('.con1_top_img').height(),
        $h_con1_btm = $('.con1_btm_img1').height(),
        $h_con2_top = $('.con2_top img').height(),
        $h_con2_btm = $('.con2_btm img').height(),
        $num = 0,
        e = 0;

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

    //---------------   sub2 콘텐츠   ---------------
    $('.slider h2:first').css({'opacity':'0', 'top':'24%'})
    $('.slider h2:first').delay(800).animate({'opacity':'1', 'top':'14.8%'},function(){
        $(this).animate({'top':'16.2%'},200,function(){
            $(this).animate({'top':'16%'},200)
        })
    })
    $('.slider ul').css({'opacity':'0'})
    $('.slider h2:nth-child(2)').css({'top':'63%', 'opacity':'0'})
    $('.slider ul').animate({'opacity':'1'},600)
    $('.slider h2:nth-child(2)').delay(1600).animate({'top':'62%', 'opacity':'1'},800)

    setInterval(function(){
        $('.slider ul').stop().animate({'left':'-100%'},1000,function(){
            $(this).find('li:first').appendTo(this)
            $(this).css({'left':'0'})
        })
    },3000)

    d=$('.carousel_group').width()
    $('.text_carousel').animate({'left':-d},40000,'linear',function(){
        $('.carousel_group:first').appendTo('.text_carousel')
        $('.text_carousel').css({'left':'0'})
    })

    setInterval(function(){
        d=$('.carousel_group').width()
        $('.text_carousel').animate({'left':-d},40000,'linear',function(){
            $('.carousel_group:first').appendTo('.text_carousel')
            $('.text_carousel').css({'left':'0'})
        })
    },40000)

    $('.con1_top_icon').animate({'rotate':'20deg'},1000,function(){
        $('.con1_top_icon').animate({'rotate':'-5deg'},1000)
    })

    setInterval(function(){
        $('.con1_top_icon').animate({'rotate':'20deg'},1000,function(){
            $('.con1_top_icon').animate({'rotate':'-5deg'},1000)
        })
    },2000)

    $('.con1_top').css({'height':$h_con1_top})
    $('.con1_btm').css({'height':$h_con1_btm})
    $('.con2_top .con2_slider ul').css({'height':$h_con2_top})
    $('.con2_btm .con2_slider ul').css({'height':$h_con2_btm})
    
    $h_con2_top=$h_con2_top+150
    $h_con2_btm=$h_con2_btm+150

    $('.con2_top').css({'height':$h_con2_top})
    $('.con2_btm').css({'height':$h_con2_btm})

    $('.btn').find('div').click(function(){
        $(this).parent('.btn').parent('.con2_slider').find('li').stop().fadeOut(300)
        
        e=$(this).index()
        $num=($num+((-2*e)+3))%4
        
        $(this).parent('.btn').parent('.con2_slider').find('li').eq($num).stop().fadeIn(300)
    })

    $(window).resize(function(){
        $h_con1_top=$('.con1_top_img').height()
        $h_con1_btm=$('.con1_btm_img1').height()
        $h_con2_top=$('.con2_top img').height()
        $h_con2_btm=$('.con2_btm img').height()
        
        $('.con1_top').css({'height':$h_con1_top})
        $('.con1_btm').css({'height':$h_con1_btm})
        $('.con2_top .con2_slider ul').css({'height':$h_con2_top})
        $('.con2_btm .con2_slider ul').css({'height':$h_con2_btm})
        
        $h_con2_top=$h_con2_top+150
        $h_con2_btm=$h_con2_btm+150

        $('.con2_top').css({'height':$h_con2_top})
        $('.con2_btm').css({'height':$h_con2_btm})
    })
})