$(document).ready(function(){
    $("#hide").click(function(){
        $(".hamlist").toggle()
     });
     $(".hamlist").click(function(){
           $(this).slideToggle();
     });
});
