$(document).ready(function(){
    let header_height = 80 + $('h1 a').height(),
        window_width = $(window).width(),
        logo_height = $('h1 a').height(),
        height_change = logo_height + (((window_width * ((1920 - window_width)/logo_height)/200)));

        $('.header_wrap').css({'height':header_height})
        $('header').css({'top':-height_change})

        $('nav li').css({'margin-top':'-30px', 'opacity':'0'})
        for(let i = 0; i<6; i++){
            $('nav li').eq(i).delay(500 + (i*100)).animate({'margin-top':'0', 'opacity':'1'},500)
        }

    $(window).resize(function(){
        window_width = $(window).width(),
        logo_height = $('h1 a').height(),
        height_change = logo_height + (((window_width * ((1920 - window_width)/logo_height)/200)));

        $('header').css({'top':-height_change})
    })
})