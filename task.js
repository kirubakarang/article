$(document).ready(function(){
    $(".js-mobilemenu").click(function(){
        if($(".left").hasClass("mobile-hide")){
            $(".left").removeClass("mobile-hide");
        }
      else{
        $(".left").addClass("mobile-hide");
      }  
    });
});