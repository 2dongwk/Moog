$(document).ready(function(){
    $('h1').delay(1100).animate({'top':'0', 'opacity':'1'},700)
    
    let s_img_h = $('.slider_img li:first img').height(),
        s_img = $('.slider_img li'),
        s_text = $('.slider_text li'),
        i = 0;

    $('.slider, .slider_img').css({'height':s_img_h * 0.9})
    $(window).resize(function(){
        $('.slider, .slider_img').css({'height':s_img_h * 0.9})
    })

    $(window).on('scroll',function(){
        if($(this).scrollTop() < 100){
            $('.header_bg').removeClass('blur')
        }else{
            $('.header_bg').addClass('blur')
        }

        let scroll = $(this).scrollTop(),
            window_h = $(this).height(),
            window_btm = scroll + window_h,
            con1_filter = $('.con1_filter').offset().top + ($('.con1_filter').height() * 0.3);

        if(window_btm > con1_filter - 50 && window_btm <= con1_filter){
            $('.borderline').css({'animation-name':'extend'})
        }else if(window_btm > con1_filter){
            for(let a = 0; a<6; a++){
                $('.con1_filter li').eq(a).delay(80*a).css({'filter':'none', 'opacity':'1'},800)
            }
            $('.borderline').css({'animation-name':'extend'})
        }

        let con1_main = $('.con1_main').offset().top + ($('.con1_main').height() * 0.3)

        if(window_btm > con1_main){
            $('.con1_main').animate({'opacity':'1'},800)
            $('.con1_sub').delay(400).animate({'opacity':'1'},800)
        }

        let con1_textbox = $('.con1_textbox').offset().top + ($('.con1_textbox').height() * 0.3);

        if(window_btm > con1_textbox){
            $('.con1_textbox').animate({'opacity':'1'},800)
            $('.con1_textbox h4').animate({'margin-top':'0'},800)
        }
    })

    $('.slider_img li:first').animate({'opacity':'1'},1200)
    $('.slider_text li:first').animate({'top':'0', 'opacity':'1'},1600)

    function auto(){
        s_img.stop().fadeOut(1800,function(){
            $(this).eq(i).appendTo('.slider_img')
        })
        s_text.stop().animate({'opacity':'0'},200,function(){
            s_text.not(s_text.eq(i)).css({'display':'block', 'top':'6%', 'opacity':'0'})
        })

        i=(i+1)%5
        
        s_img.eq(i).stop().fadeIn(1800)
        s_text.eq(i).stop().animate({'top':'0', 'opacity':'1'},1800)
    }

    autoslide = setInterval(auto, 6000)

    $('.btn').find('div').click(function(){
        clearInterval(autoslide)
        
        s_img.stop().fadeOut(600)
        s_text.stop().animate({'opacity':'0'},200,function(){
            s_text.not(s_text.eq(i)).css({'display':'block', 'top':'6%', 'opacity':'0'})
        })
        
        let btn=$(this).index()
        i=(i+4-(3*btn))%5

        s_img.eq(i).stop().fadeIn(600)
        s_text.eq(i).stop().animate({'top':'0', 'opacity':'1'},800)

        autoslide = setInterval(auto, 6000)
    })

    $('.con1_filter div').mouseover(function(){
        $(this).css({'text-shadow':'none', 'color':'#ffffff'})
    }).mouseout(function(){
        $(this).css({'text-shadow':'0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 1px #ffffff, 0 0 1px #ffffff', 'color':'#000000'})
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

    $('.con1_filter').find('div').click(function(){
        let text = $(this).text()

        $('.con1_filter').find('div').removeClass('filter_on')
        $(this).addClass('filter_on')
        $('.con1_main, .con1_sub').find('li').stop().fadeOut(100)
        $('.con1_main, .con1_sub').find("li:has(span:contains('"+text+"'))").stop().delay(99).fadeIn(600)

        if($(this).hasClass('filter_all') == true){
            $('.con1_main, .con1_sub').find('li').stop().fadeIn()
        }
    })
})