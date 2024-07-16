$(document).ready(function(){
    $('h1').delay(1100).animate({'top':'0', 'opacity':'1'},700)

    $('.main_title').animate({'top':'8%', 'opacity':'1'},1200,function(){
        $('.main>p').animate({'opacity':'1'},600)
        $('.main>a').delay(200).animate({'opacity':'1'},600)
    })
    $('.img_wrap img').delay(400).animate({'opacity':'1'},2000)
})