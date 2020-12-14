$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
	// typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Coder", "Developer", "Modeller", "Designer", "Freelancer"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });