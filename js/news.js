$(document).ready(function(){
    $('h1').delay(1100).animate({'top':'0', 'opacity':'1'},700)

    $(window).on('scroll',function(){
        let scroll = $(this).scrollTop(),
            window_h = $(this).height(),
            window_btm = scroll + window_h,
            content1 = $('.content1').offset().top;

        if(scroll > content1 - 130){
            $('nav a, h1 path').addClass('black')
            $('h1 path').css({'opacity':'1'})
            $('h1 path:last').css({'fill':'none', 'stroke':'#000000'})
            $('.header_bg').addClass('whiteblur')
        }else{
            $('nav a, h1 path').removeClass('black')
            $('h1 path:last').css({'fill':'none', 'stroke':'#ffffff'})
            $('.header_bg').removeClass('whiteblur')
        }

        $('.showme').each(function(){
            let showme_btm = $(this).offset().top + ($(this).height() * 0.3);
            
            if(window_btm > showme_btm){
                $(this).animate({'opacity':'1'},600)
                $(this).siblings('.showme_delay').delay(400).animate({'opacity':'1'},600)
            }
        })
    })

    $('.main_title').animate({'top':'8%', 'opacity':'1'},1200)
    $('.img_wrap img').delay(400).animate({'opacity':'1'},2000)
})