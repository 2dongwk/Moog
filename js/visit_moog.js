$(document).ready(function(){
    $('html, body').animate({scrollTop: 0},'fast')

    $('h1').delay(1100).animate({'top':'0', 'opacity':'1'},700)

    $(window).on('scroll',function(){
        let scroll = $(this).scrollTop(),
            window_h = $(this).height(),
            window_btm = scroll + window_h,
            content1 = $('.content1').offset().top,
            content2 = $('.content2').offset().top;

        if(scroll > content1 - 30 && scroll < content2 - 30){
            $('nav a, h1 path').addClass('black')
            $('h1 path').css({'opacity':'1'})
            $('h1 path:last').css({'fill':'none', 'stroke':'#000000'})
            $('.header_bg').addClass('whiteblur')
        }else{
            $('nav a, h1 path').removeClass('black')
            $('h1 path:last').css({'fill':'none', 'stroke':'#ffffff'})
            $('.header_bg').removeClass('whiteblur')
        }

        let bgDist = scroll * 0.1;

        $('.con1_top_img').css({'background-position-y':-bgDist})
        $('.con1_btm_img1').css({'background-position-y':-bgDist + 200})

        $('.showme').each(function(){
            let showme_btm = $(this).offset().top + ($(this).height() * 0.2);
            
            if(window_btm > showme_btm){
                $(this).animate({'opacity':'1'},600)
                $(this).siblings('.showme_delay').delay(400).animate({'opacity':'1'},600)
            }
        })
    })

    let slider_h = $('.slider li').height()*2;

    $('.slider').css({'height':slider_h})

    $('.slider h2:first').delay(400).animate({'opacity':'1', 'top':'18%'},function(){
        $(this).animate({'top':'20%'},200,function(){
            $(this).animate({'top':'19.5%'},200)
        })
    })
    $('.slider ul').animate({'opacity':'1'},600)
    $('.slider h2:nth-child(2)').delay(1000).animate({'top':'68%', 'opacity':'1'},800)

    setInterval(function(){
        $('.slider ul').stop().animate({'left':'-100%'},1000,function(){
            $(this).find('li:first').appendTo(this)
            $(this).css({'left':'0'})
        })
    },3000)

    $('.con1_top_icon').animate({'rotate':'20deg'},1000,function(){
        $(this).animate({'rotate':'-5deg'},1000)
    })

    setInterval(function(){
        $('.con1_top_icon').animate({'rotate':'20deg'},1000,function(){
            $(this).animate({'rotate':'-5deg'},1000)
        })
    },2000)

    let carousel = $('.carousel_group').width();

    $('.text_carousel').animate({'left':-carousel},40000,'linear',function(){
        $('.carousel_group:first').appendTo('.text_carousel')
        $('.text_carousel').css({'left':'0'})
    })

    setInterval(function(){
        $('.text_carousel').animate({'left':-carousel},40000,'linear',function(){
            $('.carousel_group:first').appendTo('.text_carousel')
            $('.text_carousel').css({'left':'0'})
        })
    },40000)

    let con1_top_h = $('.con1_top_img').height(),
        con1_btm_h = $('.con1_btm_img1').height(),
        con2_top_h = $('.con2_top img').height(),
        con2_btm_h = $('.con2_btm img').height();

    $('.con1_top').css({'height':con1_top_h})
    $('.con1_btm').css({'height':con1_btm_h})
    $('.con2_top .con2_slider ul').css({'height':con2_top_h})
    $('.con2_btm .con2_slider ul').css({'height':con2_btm_h})

    $('.con2_top').css({'height':con2_top_h + 150})
    $('.con2_btm').css({'height':con2_btm_h + 150})

    let virtual = $('.virtual').height(),
        content2_h = virtual + con2_top_h + con2_btm_h + 300;

    $('.content2').css({'height':content2_h})

    $(window).resize(function(){
        con1_top_h = $('.con1_top_img').height()
        con1_btm_h = $('.con1_btm_img1').height()
        con2_top_h = $('.con2_top img').height()
        con2_btm_h = $('.con2_btm img').height()
        
        $('.con1_top').css({'height':con1_top_h})
        $('.con1_btm').css({'height':con1_btm_h})
        $('.con2_top .con2_slider ul').css({'height':con2_top_h})
        $('.con2_btm .con2_slider ul').css({'height':con2_btm_h})

        $('.con2_top').css({'height':con2_top_h + 150})
        $('.con2_btm').css({'height':con2_btm_h + 150})

        virtual = $('.virtual').height()
        content2_h = virtual + con2_top_h + con2_btm_h + 300

        $('.content2').css({'height':content2_h})
    })

    let a = 0,
        b = 0;

    $('.con2_top').find('.btn div').click(function(){
        $('.con2_top').find('li').stop().fadeOut(300)
        
        let top_btn = $(this).index();
        a=(a+((-2*top_btn)+3))%4
        
        $('.con2_top').find('li').eq(a).stop().fadeIn(300)
    })

    $('.con2_btm').find('.btn div').click(function(){
        $('.con2_btm').find('li').stop().fadeOut(300)
        
        let btm_btn = $(this).index();
        b=(b+((-2*btm_btn)+3))%4
        
        $('.con2_btm').find('li').eq(b).stop().fadeIn(300)
    })
})