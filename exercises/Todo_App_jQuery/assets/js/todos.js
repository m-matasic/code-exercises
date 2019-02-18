$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input").keypress(function(event){  
    if(event.which === 13){
        if($(this).val() !== ""){
            $("#error").hide();
            const todoText = $(this).val();
            $(this).val("");
            $("ul").append("<li>" + todoText + "<span><i class='fas fa-trash'></i></span></li>");
        }else{
            $("#error").show();
        }
    }
});

$('h1').on("click", "i", function(){
    $("input").fadeToggle("fast");
    $(this).toggleClass("fa-plus fa-minus");
});

$("p").click(function(){
    $(this).toggle();
});