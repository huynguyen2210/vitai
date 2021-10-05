$(document).ready(function() {
    //Show dropdown menu when hover 
    $(".nav-item.dropdown").hover(function() {
        $(this.querySelector('.dropdown-menu')).fadeIn(500);
        $(this.querySelector('.dropdown-menu')).addClass("show");

    }, function() {
        $(this.querySelector('.dropdown-menu')).fadeOut(400);
        $(this.querySelector('.dropdown-menu')).removeClass("show");
    });


});