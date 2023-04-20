$(function(){
    $("#btnWrap>div>div>a").click(function(){
        $('html, body').animate({scrollTop:$(this.hash).offset.top},500);
    });
});