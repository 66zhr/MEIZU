$("#Dsf2").on("mouseenter",function(){
    $("#Dsf2 img").stop().animate().slideDown(200)

})
$("#Dsf2").mouseleave(function(){
    $("#Dsf2 img").stop().animate().slideUp(200)
})



$(document).ready(function(){
    $("ul li").click(function(){
        $("ul li").removeClass("add");
           $(this).addClass("add");
     });
});

