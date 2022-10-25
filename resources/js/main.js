$(document).ready(function(){
    
    //STICKY MENU
    $(".js--about-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });
    
    
    var typed = new Typed('.type-slide', {
      strings: [
        'Web Designer',
      'Graphics Designer',
      'Professional Freelancer'],
      typeSpeed: 100,
      loop: true
    });
    
    
    var typed = new Typed('.type-slide-1', {
      strings: [
        'YouTuber',
      'Seo Expert',
      'Professional Freelancer'],
      typeSpeed: 100,
      loop: true
    });
    
    
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1
            },
            
            768: {
                items: 2
            },
            
            1024: {
                items: 3
            }
        }
    });
    
    new WOW().init();
    
});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}