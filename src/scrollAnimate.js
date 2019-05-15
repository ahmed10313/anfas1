function fadeIn(Container, cssClass)
    {
      $(document).ready(function () {
        $(Container).each(function (){
          var container = $(this),
          containerOffset = $(this).offset().top/2 ;
          if($(document).scrollTop() > containerOffset)
          {
              container.removeClass(cssClass);
              console.log("REMOVED")
          }
          if($(document).scrollTop() < containerOffset)
          {
              container.addClass(cssClass);
              console.log("ADDED")
          }
      $(window).scroll(function () {
          if($(document).scrollTop() > containerOffset)
          {
              container.removeClass(cssClass);
              console.log("Doc=>REMOVED")
          }
          if($(document).scrollTop() < containerOffset)
          {
              container.addClass(cssClass);
              console.log("Doc=>ADDED")
          }
      })
        })
        });
    }