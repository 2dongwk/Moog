$(document).ready(function(){

    $('h1').delay(1100).animate({'top':'0', 'opacity':'1'},700)

    var d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0;
        //변수 이름 알아볼 수 있게 고치기

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

    for(let i = 0; i<5; i++){
        $('.filter li').eq(i).find('div').delay(450 + (i*50)).animate({'top':'-6px'},250,function(){
            $(this).animate({'top':'0'},150)
        })
    }

    // $('.filter li').eq(0).find('div').delay(450).animate({'top':'-6px'},250,function(){
    //     $(this).animate({'top':'0'},150)
    // })
    // $('.filter li').eq(1).find('div').delay(500).animate({'top':'-6px'},250,function(){
    //     $(this).animate({'top':'0'},150)
    // })
    // $('.filter li').eq(2).find('div').delay(550).animate({'top':'-6px'},250,function(){
    //     $(this).animate({'top':'0'},150)
    // })
    // $('.filter li').eq(3).find('div').delay(600).animate({'top':'-6px'},250,function(){
    //     $(this).animate({'top':'0'},150)
    // })
    // $('.filter li').eq(4).find('div').delay(650).animate({'top':'-6px'},250,function(){
    //     $(this).animate({'top':'0'},150)
    // })

    $('article, .read_more').css({'opacity':'0'})
    $('article, .read_more').delay(1700).animate({'opacity':'1'},600)

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