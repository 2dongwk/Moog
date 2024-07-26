$(document).ready(function(){
    $('h1').animate({'top':'0', 'opacity':'1'},1200)

    let con1_sub_h = $('.con1_sub_right').height() + 80;
    $('.con1_sub').css({'height':con1_sub_h})

    $(window).resize(function(){
        $('.con1_sub').css({'height':con1_sub_h})
    })

    $(window).on('scroll',function(){
        let scroll = $(this).scrollTop(),
            window_h = $(this).height(),
            window_btm = scroll + window_h,
            content2 = $('.content2').offset().top,
            content3 = $('.content3').offset().top;

        if(scroll > content2 - 30 && scroll < content3 - 140){
            $('nav a, h1 path').addClass('black')
            $('h1 path').css({'opacity':'1'})
            $('h1 path:last').css({'fill':'none', 'stroke':'#000000'})
            $('.header_bg').addClass('whiteblur')
        }else{
            $('nav a, h1 path').removeClass('black')
            $('h1 path:last').css({'fill':'none', 'stroke':'#ffffff'})
            $('.header_bg').removeClass('whiteblur')
        }

        let con1_sub = $('.con1_sub').offset().top + ($('.con1_sub').height() * 0.3);

        if(window_btm > con1_sub){
            $('.con1_sub_left').animate({'top':'0', 'opacity':'1'},800)
            $('.con1_sub_right').delay(300).animate({'top':'0', 'opacity':'1'},800)
        }else{
            $('.con1_sub_left, .con1_sub_right').css({'top':'40px', 'opacity':'0'})
        }

        $('.con_header').each(function(){
            let con_header = $(this).offset().top + ($(this).height() * 0.1);

            if(window_btm > con_header){
                $(this).find('span, p').css({'filter':'none', 'opacity':'1'})
            }
        })

        $('.showme').each(function(){
            let showme_btm = $(this).offset().top + ($(this).height() * 0.3);
            
            if(window_btm > showme_btm){
                $(this).animate({'opacity':'1'},800)
            }
        })

        let con3_sub = $('.con3_sub').offset().top + ($('.con3_sub').height() * 0.1);

        if(window_btm > con3_sub){
            for(let i = 0; i<3; i++){
                $('.con3_sub li').eq(i).delay(i*300).animate({'opacity':'1'},800)
            }
        }
    })

    $('.con1_main img').delay(1000).animate({'opacity':'1'},1600)

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