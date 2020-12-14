$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });