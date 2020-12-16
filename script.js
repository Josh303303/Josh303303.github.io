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
	// carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});