$(document).ready(function(){

    $('h1').delay(1100).animate({'top':'0', 'opacity':'1'},700)

    var d = 0,
        $h_con1_top = $('.con1_top_img').height(),
        $h_con1_btm = $('.con1_btm_img1').height(),
        $h_con2_top = $('.con2_top img').height(),
        $h_con2_btm = $('.con2_btm img').height(),
        e = 0,
        f = 0,
        g = 0,
        h = 0;
        //변수 이름 알아볼 수 있게 고치기

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

    $('.con2_top').find('.btn div').click(function(){
        $('.con2_top').find('li').stop().fadeOut(300)
        
        e=$(this).index()
        f=(f+((-2*e)+3))%4
        
        $('.con2_top').find('li').eq(f).stop().fadeIn(300)
    })

    $('.con2_btm').find('.btn div').click(function(){
        $('.con2_btm').find('li').stop().fadeOut(300)
        
        g=$(this).index()
        h=(h+((-2*g)+3))%4
        
        $('.con2_btm').find('li').eq(h).stop().fadeIn(300)
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