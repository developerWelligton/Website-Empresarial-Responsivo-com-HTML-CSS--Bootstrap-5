jQuery(document).ready(function($){

    //FIXED READER
        window.onscroll = function(){
            if(window.pageYOffset > 0){
                $('#header').addClass("active");
            }else{
                $('#header').removeClass("active");
            }
        }

        //ISOTOPE
        let btns = $('#servicos .button-group button ');
        btns.click(function(e){
            $('#servicos .button-group button').removeClass("active");
            e.target.classList.add("active");

            let selector = $(e.target).attr("data-filter");
            $('#servicos .grid').isotope({
                 filter: selector,
            });
        });

        $(window).on("load",function(){
            $('#servicos .grid').isotope({
                filter: "*",
           });
        });

        //Magnific-Popup ".grid .popup-link"
        $('.grid .popup-link').magnificPopup({
           
              
                  type: 'image', // this is a default type,
                   
             
               
            
             
        });

        //owl
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            autoplay:true,
            autoplayTimeout:5000,
             
            responsiveClass:true,
            responsive:{
                0:{
                    items:1 ,
                    nav:true
                },
                400:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:2,
                    nav:true,
                    loop:false
                }
            }
        })
             
});


 
