     jQuery(document).ready(function () {


        $(window).scroll(function(){
            if ($(window).scrollTop() > 1){
        $(".header").addClass("fixed");    
            }
        else{
            $(".header").removeClass("fixed");    
        }
        });

        $(document).ready(function() {
            $("#lightgallery").lightGallery({
                mode: 'lg-fade',
    cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
    fullScreen:true




            }); 
        });
        var config = document.querySelector('.blog-item');
    var mixer = mixitup(config);
    });
    $(document).ready(function(){
        AOS.init({
            delay: 0, 
      duration: 1000, 
        });
    
    });
    