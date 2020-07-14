/* global $ ,console,alert*/
$(function(){
    'use strict';


  // SECROL NAVE
    $(window).scroll(function(){
      if($(window).scrollTop() > 30)
      {
        $(".navbar").addClass("scroll")
      }else{
        $(".navbar").removeClass("scroll")
      }
     

      if($(window).scrollTop() > 300)
      {
        $(".to-top").css("display","block");
      }else {
        $(".to-top").css("display","none");
      }

    });

    $(".to-top").on("click",function(){
       $("html,body").animate({
           scrollTop: "0",
       },600);
    });
    //NAVE ACTIVE
    $(" .nav-item ").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    //CLOSE NAVE MOBILE
    $(".navbar-toggler").on("click",function(){
      $(".navbar-toggler-icon").toggleClass("close");
    });
    //HOVER DROPDOWN
    $(" .navbar .nav-item.dropdown").hover(function(){
      $(this).find(".dropdown-menu").addClass("show").css({"display":"block","margin-top":"0"});
    },function(){
      $(this).find(".dropdown-menu").removeClass("show").css({"display":"none","margin-top":"0"});
    });

    //click to enter from search
    $(".search-icon").on("click",function(){
      $(".fixed-search").animate({
        top:"0",
      },600)
    });
    //click to exxit from search
    $(".fixed-search .exit-search").on("click",function(){
      $(".fixed-search").animate({
        top:"-100%",
      },600)
    });
     // START SLIDER
     var wH = $(window).height(),
        hedNav = $(".header").innerHeight();
     $(".carousel-inner.slider,.carousel-item.slider").height(wH - hedNav);


    // start tour tap toggle 
    $("#list-tab .btn").on("click",function() {
      $(this).siblings().removeClass("active");      
    });

    // day btn to add class rotate 
     $("#itinerary  .btn").on("click",function(){
        $(this).find(".angle-up").toggleClass("rotate");
     });




    // scroll to apply 


    $(".btn.yet.apply").on("click", function () {
      $("html, body").animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top-$(".navbar").height(),
      }, 600);
      console.log("kabo");
  });
  
  // start fadein see more div 
  $(" .egypt-blog .btn.see-more").on("click",function(){
    $(".egypt-blog .row.hidden").removeClass("d-none");
    
  });





  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true,
  })



});
