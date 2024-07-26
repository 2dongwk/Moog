$(document).ready(function(){
    $('h1').delay(1100).animate({'top':'0', 'opacity':'1'},700)
    $('nav a, h1 path').addClass('black')
    $('h1 path').css({'opacity':'1'})
    $('h1 path:last').css({'fill':'none', 'stroke':'#000000'})
    $('.header_bg').addClass('whiteblur')
    $('article, .read_more').delay(1700).animate({'opacity':'1'},600)

    let img_h = $('.img1').height(),
        conBox_h = $('.products li:first').height(),
        conWrap_h = $('.Synthesizers').height(),
        conAll_h = $('h2').height() + 220 + conWrap_h;

    $('.products_wrap').css({'height':conWrap_h})
    $('article').css({'height':conAll_h})
    
    long_h = (img_h * 2)+(conBox_h - img_h)
    $('.img7').css({'height':long_h})

    readMore = (conAll_h / 3) * 2
    $('.divided').css({'height':readMore})

    $('.read_more').click(function(){
        $('article').removeClass('divided').css({'height':conAll_h})
        $('.page_divider').css({'display':'none'})
    })

    for(let i = 0; i<5; i++){
        $('.filter li').eq(i).find('div').delay(450 + (i*50)).animate({'top':'-6px'},250,function(){
            $(this).animate({'top':'0'},150)
        })
    }

    $(window).resize(function(){
        img_h = $('.img1').height(),
        conBox_h = $('.products li:first').height(),
        conWrap_h = $('.products_wrap>ul').height(),
        conAll_h = $('article').height() + conWrap_h;
        
        $('.products_wrap').css({'height':conWrap_h})
        long_h = (img_h * 2)+(conBox_h - img_h)
        $('.img7').css({'height':long_h})

        $('.read_more').click(function(){
            $('article').removeClass('divided').css({'height':conAll_h})
            $('.page_divider').css({'display':'none'})
        })
    })

    $(window).on('scroll',function(){
        let scroll = $(this).scrollTop(),
            window_h = $(this).height(),
            window_btm = scroll + window_h;

        $('.products li').each(function(){
            let product = $(this).offset().top + ($(this).height() * 0.2);
            
            if(window_btm > product){
                $(this).animate({'opacity':'1'},400)
            }
        })

        let con1_textbox = $('.con1_textbox').offset().top + ($('.con1_textbox').height() * 0.3);

        if(window_btm > con1_textbox){
            $('.con1_textbox').animate({'opacity':'1'},800)
            $('.con1_textbox h4').animate({'margin-top':'0'},800)
        }
    })

    $('.filter li').mouseover(function(){
        $(this).css({'color':'#000000', 'text-shadow':'none'})
    }).mouseout(function(){
        $(this).css({'color':'#ffffff', 'text-shadow':'0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000'})
    })

    $('.filter li').click(function(){
        $(this).addClass('filter_on').siblings('li').removeClass('filter_on')

        let text = $(this).text(),
            number = $(this).index();

        $('h2').stop().fadeOut(50,function(){
            $(this).text(text).stop().fadeIn(500)
        })
        $('.products_wrap').stop().fadeOut(50).eq(number).stop().fadeIn(500)
    })
})