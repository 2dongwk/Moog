$(document).ready(function(){
    var a = 0,
        b = 0,
        c = 0,
        d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0;

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

    //---------------   sub3 콘텐츠   ---------------
    d=$('.img1').height()
    e=$('.products li:first').height()
    f=(d*2)+(e-d)
    $('.img7').css({'height':f})

    g=$('article').height()
    h=(g/3)*2
    $('.divided').css({'height':h})

    $('.read_more').click(function(){
        $('article').removeClass('divided').css({'height':g})
        $('.page_divider').css({'display':'none'})
    })

    $('.filter li').eq(0).find('div').delay(450).animate({'top':'-6px'},300,function(){
        $(this).animate({'top':'0'},150)
    })
    $('.filter li').eq(1).find('div').delay(520).animate({'top':'-6px'},300,function(){
        $(this).animate({'top':'0'},150)
    })
    $('.filter li').eq(2).find('div').delay(590).animate({'top':'-6px'},300,function(){
        $(this).animate({'top':'0'},150)
    })
    $('.filter li').eq(3).find('div').delay(660).animate({'top':'-6px'},300,function(){
        $(this).animate({'top':'0'},150)
    })
    $('.filter li').eq(4).find('div').delay(730).animate({'top':'-6px'},300,function(){
        $(this).animate({'top':'0'},150)
    })

    $('article').css({'opacity':'0'})
    $('article').delay(1700).animate({'opacity':'1'},600)

    $(window).resize(function(){
        d=$('.img1').height()
        e=$('.products li:first').height()
        f=(d*2)+(e-d)
        $('.img7').css({'height':f})

        $('.read_more').click(function(){
            $('article').removeClass('divided').css({'height':g})
            $('.page_divider').css({'display':'none'})
        })
    })
})