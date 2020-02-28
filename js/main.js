// $("header .fas.fa-bars").click(function(){
//     $(".hamburger-menu").addClass("active");
// });
// $("header .close").click(function(){
//     $(".hamburger-menu").removeClass("active");
// });

// USANDO TOGGLE=======================================

$("header .fas.fa-bars, header .close").click(function(){
    $(".hamburger-menu").toggleClass("active");
});
