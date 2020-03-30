$(window).scroll(function () {
    var sc = $(window).scrollTop()



    if (sc > 800) {
        $("#nav-scroll-cus").removeClass("nav-absolute")
        $("#nav-scroll-cus").addClass("nav-onscroll")
        $("#nav-scroll-cus").addClass("brand-gradient")
    } else {
        $("#nav-scroll-cus").addClass("nav-absolute")
        $("#nav-scroll-cus").removeClass("nav-onscroll")
        $("#nav-scroll-cus").removeClass("brand-gradient")        
    }



    

});