$(document).ready(function(){
    $(window).scroll(function(){
        var slide3=$("#slide3").offset().top;
        var height=$(document).scrollTop();
        if(slide3==height){
            $("#probtn").css({"color":"#ff99ae"});
        }
    });
});

$(function(){
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>10){
            $("#homebtn").css({"color":"#006dc2"});
        }elseif(top>1300){
            $("#aboutbtn").css({"color":"pink"});
        }
    })
})