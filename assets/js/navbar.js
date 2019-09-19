$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 450){
            $(".nav-bar").css({"opacity" : "1"})
        }
        else {
            $(".nav-bar").css({"opacity" : ".7"})
        }
    })
})